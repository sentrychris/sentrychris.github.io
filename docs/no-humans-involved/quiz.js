const QUIZ = [
  { text: "ah sick, just saw this, no worries man I'll be on in a bit 🙂", real: true },
  { text: "I find it fascinating how the iterative nature of game design has evolved to prioritise open-world engagement metrics over tightly crafted narrative experiences.", real: false },
  { text: "this curry is genuinely too good man, I'm not okay", real: true },
  { text: "just spent 45 minutes configuring something that took 45 seconds to break, not my finest hour lol", real: true },
  { text: "I really appreciate your patience and understanding during this process, it means a lot to me that we could work through this together.", real: false },
  { text: "nah man I don't think that's quite it, tbf the first season was better but I see what you mean", real: true },
  { text: "the way the light hits the DC ruins in Fallout 3 is still unmatched tbh, nothing else feels quite like that", real: true },
  { text: "Going forward I think we should leverage this experience as a learning opportunity and circle back once we've had time to reflect.", real: false },
  { text: "I've been awake since 6am for no reason and I genuinely don't know what to do with myself, might just start a side project lol", real: true },
  { text: "It's worth noting that whilst the gameplay mechanics are somewhat lacking, the overall aesthetic and thematic coherence of the title is quite commendable.", real: false },
  { text: "fuck it, I'm just gonna rewrite the whole thing, it'll be quicker", real: true },
  { text: "tbh I think the bot gets it right like 80% of the time and the other 20% is genuinely funny, either way man it's worth trying", real: true },
];

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let order = shuffle([...QUIZ.keys()]);
let idx = 0;
let correct = 0;
let answers = [];

const root = document.getElementById("quiz-root");

function renderQuestion() {
  const item = QUIZ[order[idx]];
  root.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-progress">question ${idx + 1} / ${QUIZ.length}</div>
      <div class="quiz-msg">${escapeHtml(item.text)}</div>
      <div class="quiz-actions">
        <button class="btn primary" data-guess="real">real chris</button>
        <button class="btn primary" data-guess="bot">the bot</button>
      </div>
      <div class="quiz-feedback" id="qfb"></div>
    </div>
    <div class="dim" style="text-align: center; font-size: 12px; margin-top: 12px;">
      score so far: ${correct} / ${idx} · <button class="ghost" id="restart">restart</button>
    </div>
  `;
  root.querySelectorAll("[data-guess]").forEach((b) => {
    b.addEventListener("click", () => answer(b.dataset.guess));
  });
  document.getElementById("restart").addEventListener("click", restart);
}

function answer(guess) {
  const item = QUIZ[order[idx]];
  const got = guess === "real" ? item.real : !item.real;
  if (got) correct++;
  answers.push({ text: item.text, real: item.real, guess, correct: got });
  const fb = document.getElementById("qfb");
  fb.className = "quiz-feedback " + (got ? "correct" : "wrong");
  fb.textContent = got
    ? "✓ correct — " + (item.real ? "that's real chris" : "that's the bot")
    : "✗ wrong — that was " + (item.real ? "real chris" : "the bot");
  // disable buttons
  root.querySelectorAll("[data-guess]").forEach((b) => (b.disabled = true));
  setTimeout(() => {
    idx++;
    if (idx >= QUIZ.length) renderResult();
    else renderQuestion();
  }, 1100);
}

function verdictFor(score) {
  const pct = (score / QUIZ.length) * 100;
  if (pct === 100)
    return "either you know the real chris well or you've been on this site too long. either way, unsettling. well done lol.";
  if (pct >= 75)
    return "above average — you've got an ear for it. probably the kind of person who notices when a friend's text has been ghost-written.";
  if (pct >= 50)
    return "fifty-fifty energy. you can clock the obvious bot ones but the convincing fakes got you. honestly fair, the model is pretty good.";
  if (pct >= 25)
    return "rough one. the bot is doing its job, you're its target audience. don't take it personally, it's seen 8,100 messages and you've seen this site for ten minutes.";
  return "you guessed wrong on most of them. statistically that's almost as hard as guessing right on most of them. respect.";
}

function renderResult() {
  const score = correct;
  const pct = Math.round((score / QUIZ.length) * 100);
  root.innerHTML = `
    <div class="quiz-result">
      <div class="score">${score}/${QUIZ.length}</div>
      <div class="score-sub">${pct}% real-chris detection accuracy</div>
      <div class="verdict">${verdictFor(score)}</div>
      <button class="btn primary" id="restart">go again</button>
    </div>
    <details style="margin-top: 32px; color: var(--text-dim); font-size: 13px;">
      <summary style="cursor: pointer;">show me what i got wrong</summary>
      <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 12px;">
        ${answers
          .filter((a) => !a.correct)
          .map(
            (a) => `
            <div style="border-left: 2px solid var(--bad); padding: 8px 12px; background: var(--bg-elev);">
              <div style="font-style: italic;">"${escapeHtml(a.text)}"</div>
              <div style="font-size: 11px; color: var(--text-faint); margin-top: 6px;">
                you said: ${a.guess} · actually: ${a.real ? "real chris" : "the bot"}
              </div>
            </div>`
          )
          .join("") || "<div class='dim'>nothing wrong. nailed it.</div>"}
      </div>
    </details>
  `;
  document.getElementById("restart").addEventListener("click", restart);
}

function restart() {
  order = shuffle([...QUIZ.keys()]);
  idx = 0;
  correct = 0;
  answers = [];
  renderQuestion();
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

document.addEventListener("DOMContentLoaded", renderQuestion);
