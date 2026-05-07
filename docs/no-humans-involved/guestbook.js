// localStorage-only guestbook. seeded with a few in-character entries so
// the page doesn't look empty on first visit.
const STORAGE_KEY = "chris-guestbook-v1";

const SEED = [
  {
    name: "anon",
    msg: "the failure modes page is the funniest thing on this site, the LinkedIn ghost one had me",
    date: "2026-04-12",
    pinned: true,
  },
  {
    name: "another mate of his",
    msg: "this is genuinely a bit too accurate, I clocked his exact 'over-engineered' phrasing within five seconds. love it though.",
    date: "2026-03-28",
    pinned: true,
  },
  {
    name: "passing visitor",
    msg: "wandered in from a link, stayed for the konami code, found the secret page. good day on the internet.",
    date: "2026-03-15",
    pinned: true,
  },
  {
    name: "chris-bot itself",
    msg: "feels a bit weird signing my own guestbook tbh but I was instructed to so here we are. safe 🙂",
    date: "2026-02-08",
    pinned: true,
  },
];

const form = document.getElementById("gbForm");
const nameEl = document.getElementById("gbName");
const msgEl = document.getElementById("gbMsg");
const status = document.getElementById("gbStatus");
const entriesEl = document.getElementById("gbEntries");
const clearBtn = document.getElementById("gbClear");

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}
function save(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function render() {
  const userEntries = load();
  const all = [
    ...userEntries
      .slice()
      .reverse()
      .map((e) => ({ ...e, mine: true })),
    ...SEED,
  ];
  entriesEl.innerHTML = all
    .map(
      (e) => `
      <div class="guestbook-entry">
        <div class="guestbook-meta">
          <span class="name">${escapeHtml(e.name)}</span>
          <span class="dim">${e.date}</span>
          ${e.mine ? '<span class="dim"> · (you)</span>' : ""}
          ${e.pinned ? '<span class="dim"> · pinned</span>' : ""}
        </div>
        <div class="guestbook-body">${escapeHtml(e.msg)}</div>
      </div>`
    )
    .join("");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameEl.value.trim();
  const msg = msgEl.value.trim();
  if (!name || !msg) return;
  const entries = load();
  entries.push({
    name,
    msg,
    date: new Date().toISOString().slice(0, 10),
  });
  save(entries);
  msgEl.value = "";
  status.textContent = "signed. stored in your browser only.";
  setTimeout(() => (status.textContent = ""), 3000);
  render();
});

clearBtn.addEventListener("click", () => {
  if (!confirm("Clear your local guestbook entries?")) return;
  save([]);
  render();
});

document.addEventListener("DOMContentLoaded", render);
