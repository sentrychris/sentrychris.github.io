const BOT_URL = "https://chris.ai.edcs.app/chat";

const EXAMPLE = `I hope this email finds you well. I wanted to circle back regarding the proposal we discussed in our last sync. After leveraging some additional input from stakeholders, I think we have a clearer path forward. Going forward, my recommendation would be that we synergise our efforts and revisit the timeline once we've had a chance to reflect on the deliverables.`;

const src = document.getElementById("src");
const out = document.getElementById("out");
const meta = document.getElementById("meta");
const goBtn = document.getElementById("goBtn");
const clearBtn = document.getElementById("clearBtn");
const exampleBtn = document.getElementById("exampleBtn");

exampleBtn.addEventListener("click", () => (src.value = EXAMPLE));
clearBtn.addEventListener("click", () => {
  src.value = "";
  out.textContent = "";
  meta.textContent = "";
});

goBtn.addEventListener("click", translate);

async function translate() {
  const text = src.value.trim();
  if (!text) return;
  goBtn.disabled = true;
  out.textContent = "";
  meta.textContent = "thinking…";

  const messages = [
    {
      role: "user",
      content:
        "I'm gonna paste a bit of text. Don't respond to it — rewrite it in your own voice, casual chris style, lowercase-y, no corporate words, keep the meaning roughly the same but say it the way you'd actually say it. Just give me the rewrite, no preamble.\n\n---\n\n" +
        text,
    },
  ];

  const cursor = document.createElement("span");
  cursor.className = "cursor";
  out.appendChild(cursor);
  let acc = "";

  try {
    const resp = await fetch(BOT_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ messages }),
    });
    if (!resp.ok || !resp.body) throw new Error(`HTTP ${resp.status}`);
    const reader = resp.body.getReader();
    const dec = new TextDecoder();
    let buf = "";
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      const chunks = buf.split("\n\n");
      buf = chunks.pop() ?? "";
      for (const chunk of chunks) {
        const line = chunk.split("\n").find((l) => l.startsWith("data:"));
        if (!line) continue;
        let payload;
        try {
          payload = JSON.parse(line.slice(5).trim());
        } catch {
          continue;
        }
        if (payload.delta) {
          acc += payload.delta;
          out.textContent = acc;
          out.appendChild(cursor);
        }
        if (payload.error) throw new Error(payload.error);
        if (payload.done) {
          const u = payload.usage || {};
          meta.textContent = `done · in ${u.input_tokens || 0} tokens · out ${u.output_tokens || 0}`;
        }
      }
    }
  } catch (err) {
    out.textContent = "couldn't reach the bot: " + err.message;
    meta.textContent = "";
  } finally {
    cursor.remove();
    goBtn.disabled = false;
  }
}
