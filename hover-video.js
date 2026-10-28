/* Project videos (video[data-hover-play])
   - Page load: each video plays once, the first time it is on screen.
   - Desktop: after that, plays once from the start each time the cursor
     enters the card/video, then stops on its last frame. Never loops.
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

    if (canHover) {
      const target = v.closest('.link-card') || v.closest('.project-gallery') || v;
      target.addEventListener('mouseenter', () => playFromStart(v));
    }
  });

  if (!('IntersectionObserver' in window)) {
    videos.forEach(playFromStart);
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const v = e.target;
      if (e.isIntersecting && !v.dataset.inView) {
        v.dataset.inView = '1';
        // desktop: only the first appearance; touch: every appearance
        if (!canHover || !v.dataset.playedOnce) { v.dataset.playedOnce = '1'; playFromStart(v); }
      }
      if (!e.isIntersecting) delete v.dataset.inView;
    });
  }, { threshold: 0.25 });
  videos.forEach((v) => io.observe(v));
})();
