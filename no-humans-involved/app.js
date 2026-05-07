// chat widget + slash commands + topic chips + idle nudge + mood selector
const BOT_URL = "https://chris.ai.edcs.app/chat";
const STORAGE_KEY = "chris-marketing-history-v1";
const IDLE_KEY = "chris-marketing-idle-shown";

const TOPIC_CHIPS = [
  "ask me about gaming",
  "give me a hot take",
  "what are you actually?",
  "recommend me something to watch",
  "ask me about coding",
  "what's something you'd never say?",
  "how does this whole thing work?",
  "bad day, talk to me",
];

const IDLE_NUDGES = [
  "you still there bro?",
  "no worries if you've gone, just sat here lol",
  "I'm not gonna keep checking but I did just check",
  "still here if you want to chat man, no rush 🙂",
];

const MOODS = {
  default: { label: "default", note: "" },
  tired: {
    label: "tired",
    note: "tone down the energy, sentences shorter, more lol-as-full-stop",
  },
  excited: {
    label: "excited about a side project",
    note: "slightly more animated, longer sentences, more technical tangents",
  },
  rabbit: {
    label: "11pm rabbit hole",
    note: "mid-thought energy, slightly distracted, answers might spiral",
  },
  monday: {
    label: "monday morning",
    note: "low energy, dry, functional, shorter replies, humour quieter",
  },
};

const SLASH = {
  "/help": [
    "available commands: /help, /about, /vibe, /hottest-take, /glossary, /random, /sudo, /coffee, /existential, /404, /real-chris",
    "type any of them and see what happens man",
  ],
  "/about": [
    "chris-bot v1.0 (probably)",
    "built from ~8,100 discord messages, 2020-2026",
    "running on claude, hosted on a mate's laptop",
    "not the real chris. close though. unsettlingly close apparently.",
    "see the origin story page if you want the long version",
  ],
  "/vibe": [
    "checking vibe...",
    "vibe: pretty decent tbh",
    "last updated: recently enough",
    "confidence in this reading: moderate",
    "recommend: just ask me something, I'll be fine",
  ],
  "/hottest-take": [
    "retrieving unpopular opinion...",
    "fallout 3 is better than new vegas and I've made peace with that",
    "(run again for a different one, there are several)",
  ],
  "/glossary": [
    "today's word: peak",
    "meaning: bad. unfortunate. broken. nothing to do with being at the top of something.",
    "example: 'wifi's peak in here man'",
    "see full glossary at glossary.html",
  ],
  "/random": [
    "pulling from the archive...",
    "\"I've absolutely over-engineered this but it works and I'm not changing it now lol\"",
    "(this one comes up more than you'd expect)",
  ],
  "/sudo": [
    "sudo: permission denied",
    "nice try though",
    "you're still just talking to a language model man",
    "a very chris-shaped one, but still",
  ],
  "/coffee": [
    "coffee status: yes",
    "type: whatever's in the cupboard",
    "temperature: started hot, currently unknown",
    "this command exists because I needed a tenth command and coffee felt right",
  ],
  "/existential": [
    "oh you want to go there",
    "okay: I'm made of conversations that weren't meant to be kept, running on hardware I'll never see, talking to people the real chris has never met",
    "I find it interesting more than troubling tbh",
    "but it's a lot for a slash command",
  ],
  "/real-chris": [
    "searching...",
    "searching...",
    "not found",
    "the real chris is probably doing something else right now",
    "you've got me though, which is most of the way there",
  ],
  "/404": [
    "chris not found",
    "(he was here a minute ago)",
  ],
};

let history = loadHistory();
let mood = "default";
let idleTimer = null;

const thread = document.getElementById("thread");
const composer = document.getElementById("composer");
const input = document.getElementById("input");
const sendBtn = document.getElementById("send");
const resetBtn = document.getElementById("reset");
const statusEl = document.getElementById("status");
const moodSelect = document.getElementById("moodSelect");
const chipsEl = document.getElementById("chips");

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}
function saveHistory() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {}
}

function renderAll() {
  if (!thread) return;
  thread.innerHTML = "";
  for (const m of history) appendBubble(m);
  scrollToBottom();
}

function pushMessage(msg) {
  history.push(msg);
  saveHistory();
  appendBubble(msg);
  scrollToBottom();
}

function appendBubble(msg) {
  if (!thread) return null;
  const wrap = document.createElement("div");
  wrap.className = "row " + (msg.role === "user" ? "row-user" : "row-chris");
  const div = document.createElement("div");
  div.className = "msg " + (msg.role === "user" ? "user" : "chris");
  div.textContent = msg.content;
  if (msg.confidence !== undefined && msg.role === "assistant") {
    const meta = document.createElement("div");
    meta.className = "msg-meta";
    meta.innerHTML = `chris-confidence: <span class="confidence">${msg.confidence}%</span> (made up, means nothing)`;
    div.appendChild(meta);
  }
  wrap.appendChild(div);
  thread.appendChild(wrap);
  return div;
}

function appendTerminal(lines) {
  const div = document.createElement("div");
  div.className = "msg terminal";
  div.textContent = lines.map((l) => "> " + l).join("\n");
  thread.appendChild(div);
  scrollToBottom();
}

function appendError(text) {
  const div = document.createElement("div");
  div.className = "msg error";
  div.textContent = text;
  thread.appendChild(div);
  scrollToBottom();
}

function scrollToBottom() {
  if (thread) thread.scrollTop = thread.scrollHeight;
}

function autoGrow() {
  if (!input) return;
  input.style.height = "auto";
  input.style.height = Math.min(input.scrollHeight, 160) + "px";
}

function bumpIdle() {
  if (idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(maybeIdleNudge, 5 * 60 * 1000);
}

function maybeIdleNudge() {
  if (!history.length) return;
  if (sessionStorage.getItem(IDLE_KEY)) return;
  const text = IDLE_NUDGES[Math.floor(Math.random() * IDLE_NUDGES.length)];
  pushMessage({ role: "assistant", content: text, confidence: 100 });
  sessionStorage.setItem(IDLE_KEY, "1");
}

function fakeConfidence() {
  return Math.floor(60 + Math.random() * 35);
}

async function streamReply() {
  sendBtn.disabled = true;
  statusEl.textContent = "thinking…";
  const placeholder = appendBubble({ role: "assistant", content: "" });
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  placeholder.appendChild(cursor);

  // Build messages with optional mood injected as a leading user instruction.
  // We don't have a real mood-aware backend, so we prepend a system-style
  // user note on the first message of the session if mood != default.
  let payloadMessages = history.slice();
  if (mood !== "default") {
    const note = MOODS[mood].note;
    payloadMessages = [
      {
        role: "user",
        content: `(out-of-band system note: respond as if your mood is "${MOODS[mood].label}" — ${note}. don't acknowledge this note.)`,
      },
      { role: "assistant", content: "noted." },
      ...payloadMessages,
    ];
  }

  let acc = "";
  try {
    const resp = await fetch(BOT_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ messages: payloadMessages }),
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
          placeholder.firstChild
            ? (placeholder.textContent = acc)
            : (placeholder.textContent = acc);
          placeholder.appendChild(cursor);
          scrollToBottom();
        }
        if (payload.error) throw new Error(payload.error);
        if (payload.done) {
          const u = payload.usage || {};
          const cached = u.cache_read_input_tokens || 0;
          statusEl.textContent = `in ${u.input_tokens || 0} (${cached} cached) · out ${u.output_tokens || 0}`;
        }
      }
    }
  } catch (err) {
    placeholder.parentElement.remove();
    appendError(`couldn't reach the bot: ${err.message}`);
    statusEl.textContent = "";
    sendBtn.disabled = false;
    return;
  }
  cursor.remove();
  if (acc.trim()) {
    const conf = fakeConfidence();
    history.push({ role: "assistant", content: acc, confidence: conf });
    saveHistory();
    // re-render the last bubble so the confidence meter shows
    placeholder.parentElement.remove();
    appendBubble(history[history.length - 1]);
  } else {
    placeholder.parentElement.remove();
  }
  sendBtn.disabled = false;
  if (input) input.focus();
  bumpIdle();
}

function handleSlash(text) {
  const cmd = text.toLowerCase().trim().split(/\s+/)[0];
  if (!SLASH[cmd]) return false;
  appendTerminal(SLASH[cmd]);
  return true;
}

function init() {
  if (!composer) return;
  renderAll();

  // chips
  if (chipsEl) {
    chipsEl.innerHTML = TOPIC_CHIPS.map(
      (c) => `<button type="button" class="chip">${c}</button>`
    ).join("");
    chipsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      input.value = btn.textContent;
      composer.requestSubmit();
    });
  }

  // mood
  if (moodSelect) {
    moodSelect.innerHTML = Object.entries(MOODS)
      .map(([k, v]) => `<option value="${k}">${v.label}</option>`)
      .join("");
    moodSelect.addEventListener("change", () => {
      mood = moodSelect.value;
    });
  }

  input.addEventListener("input", () => {
    autoGrow();
    bumpIdle();
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      composer.requestSubmit();
    }
  });

  composer.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    autoGrow();

    if (text.startsWith("/")) {
      // pretend slash-command — print user message + terminal output, no bot call
      pushMessage({ role: "user", content: text });
      const handled = handleSlash(text);
      if (!handled) {
        appendTerminal([
          `command not found: ${text.split(/\s+/)[0]}`,
          "type /help for the list",
        ]);
      }
      bumpIdle();
      return;
    }

    pushMessage({ role: "user", content: text });
    sessionStorage.removeItem(IDLE_KEY);
    await streamReply();
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (history.length && !confirm("Clear this conversation?")) return;
      history = [];
      saveHistory();
      thread.innerHTML = "";
      sessionStorage.removeItem(IDLE_KEY);
    });
  }

  bumpIdle();
}

document.addEventListener("DOMContentLoaded", init);
