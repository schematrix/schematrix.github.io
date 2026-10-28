/* Hover-to-play videos (video[data-hover-play])
   - Desktop: plays once from the start when the cursor enters the card/video,
     then stops on its last frame until the cursor comes back.
   - Touch screens (no hover): plays once each time it scrolls into view.
   - Reduced motion: stays on its first frame. */
(function () {
  const videos = document.querySelectorAll('video[data-hover-play]');
  if (!videos.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function playFromStart(v) {
    if (reduce) return;
    try { v.currentTime = 0; } catch (e) {}
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  }

  videos.forEach((v) => {
    v.loop = false;
    v.muted = true;
    v.removeAttribute('autoplay');
    v.pause();
    // show the first frame instead of a blank box (Safari needs a nudge)
    v.addEventListener('loadeddata', () => { if (v.paused && v.currentTime === 0) v.currentTime = 0.01; }, { once: true });

    if (canHover) {
      const target = v.closest('.link-card') || v.closest('.project-gallery') || v;
      target.addEventListener('mouseenter', () => playFromStart(v));
    }
  });

  if (!canHover && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const v = e.target;
        if (e.isIntersecting && !v.dataset.inView) { v.dataset.inView = '1'; playFromStart(v); }
        if (!e.isIntersecting) delete v.dataset.inView;
      });
    }, { threshold: 0.6 });
    videos.forEach((v) => io.observe(v));
  }
})();
