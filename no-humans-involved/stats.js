// animate the counter numbers + bar widths on scroll-in
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const isFloat = !Number.isInteger(target);
  const duration = 1100;
  const start = performance.now();
  function step(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const v = target * eased;
    el.textContent = isFloat ? v.toFixed(1) : Math.round(v).toLocaleString();
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function animateBars() {
  const bars = document.querySelectorAll("#vibeBars .bar-row");
  bars.forEach((row, i) => {
    const pct = parseFloat(row.querySelector(".pct").dataset.v);
    const span = row.querySelector(".bar > span");
    setTimeout(() => {
      span.style.transition = "width 0.9s cubic-bezier(0.2,0.7,0.2,1)";
      span.style.width = pct + "%";
      const pctEl = row.querySelector(".pct");
      const start = performance.now();
      function step(now) {
        const t = Math.min(1, (now - start) / 900);
        const eased = 1 - Math.pow(1 - t, 3);
        pctEl.textContent = Math.round(pct * eased) + "%";
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, i * 80);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".counter").forEach(animateCounter);
  setTimeout(animateBars, 250);
});
