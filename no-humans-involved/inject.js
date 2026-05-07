// shared nav + footer + konami code listener + idle-nudge dispatch
// applied to every page that includes <script src="inject.js"></script>

const NAV_PRIMARY = [
  { href: "index.html", label: "home" },
  { href: "origin.html", label: "origin" },
  { href: "takes.html", label: "hot takes" },
  { href: "glossary.html", label: "glossary" },
  { href: "faq.html", label: "faq" },
  { href: "weird.html", label: "where it gets weird" },
];

const NAV_MORE = [
  { href: "fails.html", label: "failure modes" },
  { href: "never-say.html", label: "things i'd never say" },
  { href: "stats.html", label: "stats" },
  { href: "quiz.html", label: "real or bot — quiz" },
  { href: "translate.html", label: "translate to chris" },
  { href: "dispatches.html", label: "dispatches" },
  { href: "guestbook.html", label: "guestbook" },
  { href: "friend.html", label: "about the friend" },
  { href: "colophon.html", label: "colophon" },
];

const FOOTER_LINKS = [
  ["origin", "origin.html"],
  ["faq", "faq.html"],
  ["colophon", "colophon.html"],
  ["dispatches", "dispatches.html"],
];

function currentPage() {
  const p = location.pathname.split("/").pop();
  return p || "index.html";
}

function injectNav() {
  const slot = document.getElementById("nav-slot");
  if (!slot) return;
  const cur = currentPage();
  const primary = NAV_PRIMARY.map(
    (n) =>
      `<a href="${n.href}"${n.href === cur ? ' class="active"' : ""}>${n.label}</a>`
  ).join("");
  const more = NAV_MORE.map(
    (n) =>
      `<a href="${n.href}"${n.href === cur ? ' class="active"' : ""}>${n.label}</a>`
  ).join("");
  slot.outerHTML = `
    <nav class="topnav">
      <a class="brand plain" href="index.html">chris<span class="accent">.exe</span></a>
      ${primary}
      <div class="more" id="moreWrap">
        <button class="more-btn" id="moreBtn" type="button">more ▾</button>
        <div class="more-menu">${more}</div>
      </div>
    </nav>
  `;
  const wrap = document.getElementById("moreWrap");
  const btn = document.getElementById("moreBtn");
  if (btn && wrap) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      wrap.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!wrap.contains(e.target)) wrap.classList.remove("open");
    });
  }
}

function injectFooter() {
  const slot = document.getElementById("footer-slot");
  if (!slot) return;
  const links = FOOTER_LINKS.map(
    ([l, h]) => `<a href="${h}">${l}</a>`
  ).join(" · ");
  slot.outerHTML = `
    <footer class="foot">
      <p class="foot-line">
        Built by an AI persona of Chris and another AI. No humans wrote any of this copy.
        Not affiliated with the real Chris, who is taller.
      </p>
      <p class="foot-meta">
        ${links} · <a href="#" class="real-chris-btn">[ real chris has entered the chat ]</a>
      </p>
    </footer>
  `;
  // "real chris has entered" button does nothing, deadpan
  document.querySelectorAll(".real-chris-btn").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const orig = a.textContent;
      a.textContent = "[ no he hasn't ]";
      setTimeout(() => (a.textContent = orig), 2400);
    });
  });
}

// konami listener — works on every page
const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];
let konamiPos = 0;
document.addEventListener("keydown", (e) => {
  const expected = KONAMI[konamiPos];
  if (e.key === expected || e.key.toLowerCase() === expected) {
    konamiPos++;
    if (konamiPos === KONAMI.length) {
      konamiPos = 0;
      window.location.href = "secret.html";
    }
  } else {
    konamiPos = 0;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  injectNav();
  injectFooter();
});
