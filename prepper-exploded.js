/* HAS_PrepperDisk exploded view
   Scroll drives four CSS variables on .xv:
   --t  parts assemble (0 exploded → 1 assembled)
   --ct case bottom rises in, --cs case top comes down
   --pf parts fade out under the closed case, --d final caption */
(function () {
  const sec = document.querySelector('.xv');
  if (!sec) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const clamp = (x) => Math.min(1, Math.max(0, x));
  const ease = (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);
  const seg = (p, a, b) => ease(clamp((p - a) / (b - a)));
  let ticking = false;

  function update() {
    ticking = false;
    const rect = sec.getBoundingClientRect();
    const total = sec.offsetHeight - window.innerHeight;
    const p = clamp(-rect.top / total);
    const v = {
      '--t':  seg(p, 0.08, 0.42),   // parts come together
      '--ct': seg(p, 0.46, 0.64),   // case bottom rises
      '--cs': seg(p, 0.58, 0.80),   // case top comes down
      '--pf': seg(p, 0.68, 0.77),   // hide the parts once covered
      '--d':  seg(p, 0.82, 0.90),   // final caption
    };
    for (const k in v) sec.style.setProperty(k, v[k].toFixed(4));
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
