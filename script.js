(function () {
  /* ── Sidebar Toggle (Desktop) ──────────── */
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const collapsed = document.body.classList.toggle('sidebar-collapsed');
      menuToggle.setAttribute('aria-expanded', String(!collapsed));
      menuToggle.textContent = collapsed ? 'Menüyü Aç' : 'Menüyü Kapat';
    });
  }

  /* ── Mobile Menu Toggle ────────────────── */
  const mobileToggle = document.getElementById('mobileToggle');
  const nav = document.querySelector('nav');
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      mobileToggle.textContent = isOpen ? 'Kapat' : 'Menü';
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          nav.classList.remove('open');
          mobileToggle.textContent = 'Menü';
        }
      });
    });
  }

  /* ── Scroll Reveal ─────────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => revealObserver.observe(el));
  }

  /* ── Video Always Loop (No User Control) ─ */
  const videos = document.querySelectorAll('.vtr-video:not(.about-vtr-video) video');
  if (videos.length) {
    videos.forEach((video) => {
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      video.play().catch(() => {});
    });
  }

  /* ── About Videos: Play In View, Pause Out ─ */
  const aboutVideos = document.querySelectorAll('.about-vtr-video video');
  if (aboutVideos.length) {
    const aboutVideoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          const source = video.querySelector('source[data-src]');
          if (source && !source.src) {
            source.src = source.dataset.src;
            video.load();
          }
          video.muted = true;
          video.loop = true;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.35 });

    aboutVideos.forEach((video) => {
      video.muted = true;
      video.loop = true;
      aboutVideoObserver.observe(video);
    });
  }

  /* ── Smooth active link highlight ──────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage)) {
      link.classList.add('active');
    }
  });
})();
