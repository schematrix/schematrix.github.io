(function () {
  /* ── Mobile Menu Toggle ────────────────── */
  const t = (key, fallback) =>
    (window.SchematrixI18N ? window.SchematrixI18N.t(key) : fallback);

  const mobileToggle = document.getElementById('mobileToggle');
  const nav = document.querySelector('nav');
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      mobileToggle.textContent = isOpen ? t('nav_close', 'Close') : t('nav_menu', 'Menu');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          nav.classList.remove('open');
          mobileToggle.textContent = t('nav_menu', 'Menu');
          mobileToggle.setAttribute('aria-expanded', 'false');
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
  const videos = document.querySelectorAll('.vtr-video video');
  if (videos.length) {
    videos.forEach((video) => {
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      video.play().catch(() => {});
    });
  }

  /* ── Replay project card videos on hover ─ */
  document.querySelectorAll('.project-card').forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;
    card.addEventListener('mouseenter', () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    });
  });

  /* ── Interactive mesh diagram (meschy.html) ─ */
  const meshViz = document.querySelector('.mesh-viz');
  if (meshViz) {
    const chat = document.getElementById('meshChat');
    const cliLog = document.getElementById('meshCliLog');
    const input = document.getElementById('meshInput');
    const sendBtn = document.getElementById('meshSend');

    const NODES = [
      { key: 'b1', name: 'Atlas' },
      { key: 'b2', name: 'Vega' },
      { key: 'b3', name: 'Orion' },
      { key: 'b4', name: 'Lyra' },
      { key: 'b5', name: 'Nova' },
      { key: 'b6', name: 'Echo' }
    ];
    const REPLY_KEYS = ['mesh_reply_1', 'mesh_reply_2', 'mesh_reply_3', 'mesh_reply_4', 'mesh_reply_5', 'mesh_reply_6'];
    const USER_NAME = 'Meschy-01';

    const run = (selector) => {
      meshViz.querySelectorAll(selector).forEach((el) => {
        el.classList.remove('run');
        void el.getBoundingClientRect(); /* restart animation */
        el.classList.add('run');
      });
    };
    meshViz.querySelectorAll('.mv-pkt, .mv-ripple').forEach((el) => {
      el.addEventListener('animationend', () => el.classList.remove('run'));
    });

    const setScreen = (node, sender, text) => {
      const msgEl = meshViz.querySelector('.mv-screen[data-node="' + node.key + '"] .mv-screen-msg');
      if (!msgEl) return;
      msgEl.removeAttribute('data-i18n');
      msgEl.textContent = sender + ' ▸ ' + text;
      msgEl.classList.remove('pop');
      void msgEl.offsetWidth;
      msgEl.classList.add('pop');
    };

    const addCli = (sender, text) => {
      const line = document.createElement('div');
      line.textContent = '[' + sender + '] ▸ ' + text;
      cliLog.appendChild(line);
      while (cliLog.children.length > 5) cliLog.removeChild(cliLog.firstChild);
    };

    const addBubble = (text, sender) => {
      const bubble = document.createElement('div');
      bubble.className = sender ? 'mv-msg in' : 'mv-msg';
      if (sender) {
        const who = document.createElement('div');
        who.className = 'mv-msg-sender';
        who.textContent = sender;
        bubble.appendChild(who);
      }
      bubble.appendChild(document.createTextNode(text));
      chat.appendChild(bubble);
      while (chat.children.length > 6) chat.removeChild(chat.firstChild);
    };

    /* a node transmits a reply: ripple at the node, hop to Meschy,
       Meschy rebroadcasts to everyone (phone + other nodes + CLI) */
    function nodeReply(node) {
      const t = window.SchematrixI18N ? window.SchematrixI18N.t.bind(window.SchematrixI18N) : ((k) => k);
      const text = t(REPLY_KEYS[Math.floor(Math.random() * REPLY_KEYS.length)]);
      run('.mv-rip-' + node.key);
      run('.mv-pkt-r' + node.key.slice(1));
      setScreen(node, node.name, text);
      setTimeout(() => {
        run('.mv-rip-meschy');
        NODES.forEach((other) => { if (other.key !== node.key) run('.mv-pkt-' + other.key); });
        run('.mv-pkt-down');
      }, 850);
      setTimeout(() => {
        NODES.forEach((other) => { if (other.key !== node.key) setScreen(other, node.name, text); });
        addBubble(text, node.name);
        run('.mv-pkt-u1');
      }, 1750);
      setTimeout(() => addCli(node.name, text), 2200);
    }

    /* user sends: BLE to Meschy, Meschy ripples + broadcasts,
       every node receives (and rebroadcasts), CLI logs it, nodes answer */
    function sendMeshMessage() {
      const text = input.value.trim();
      if (!text) return;
      input.value = '';
      input.focus();

      const hint = document.getElementById('meshHint');
      if (hint) hint.classList.add('mv-hint-hide');

      addBubble(text, null);
      run('.mv-pkt-up');
      setTimeout(() => {
        run('.mv-rip-meschy');
        NODES.forEach((n) => run('.mv-pkt-' + n.key));
      }, 850);
      setTimeout(() => {
        NODES.forEach((n) => { run('.mv-rip-' + n.key); setScreen(n, USER_NAME, text); });
        run('.mv-pkt-u1');
      }, 1750);
      setTimeout(() => addCli(USER_NAME, text), 2200);

      /* 1-2 random nodes reply */
      const shuffled = NODES.slice().sort(() => Math.random() - 0.5);
      shuffled.slice(0, 1 + Math.floor(Math.random() * 2)).forEach((node, i) => {
        setTimeout(() => nodeReply(node), 3400 + i * 3200);
      });
    }

    if (input && sendBtn) {
      sendBtn.addEventListener('click', sendMeshMessage);
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendMeshMessage();
      });
    }

    /* ambient mesh telemetry: quiet radio chatter, no screen/log changes */
    setInterval(() => {
      if (document.hidden) return;
      const node = NODES[Math.floor(Math.random() * NODES.length)];
      if (Math.random() < 0.5) {
        run('.mv-rip-' + node.key);
        run('.mv-pkt-r' + node.key.slice(1));
      } else {
        run('.mv-rip-meschy');
        run('.mv-pkt-' + node.key);
      }
    }, 6000);
  }

  /* ── Who am I: deal-with-it sunglasses ──── */
  const waiPhoto = document.getElementById('waiPhoto');
  if (waiPhoto) {
    const dropShades = () => {
      waiPhoto.classList.remove('on');
      void waiPhoto.getBoundingClientRect();
      waiPhoto.classList.add('on');
    };
    const shadesObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(dropShades, 500);
          shadesObserver.disconnect();
        }
      });
    }, { threshold: 0.4 });
    shadesObserver.observe(waiPhoto);
    waiPhoto.addEventListener('click', dropShades);
  }

  /* ── Who am I: skill mesh ───────────────── */
  const skillPanel = document.getElementById('waiSkillPanel');
  if (skillPanel) {
    const titleEl = document.getElementById('waiSkillTitle');
    const descEl = document.getElementById('waiSkillDesc');
    const tt = (key) => (window.SchematrixI18N ? window.SchematrixI18N.t(key) : key);

    document.querySelectorAll('.wai-skill, .wai-skill-chip').forEach((node) => {
      const select = () => {
        const id = node.getAttribute('data-skill');
        document.querySelectorAll('.wai-skill.active, .wai-skill-chip.active').forEach((n) => n.classList.remove('active'));
        /* mirror the selection on both the SVG node and the mobile chip */
        document.querySelectorAll('[data-skill="' + id + '"]').forEach((n) => n.classList.add('active'));
        titleEl.textContent = node.getAttribute('data-name') || '';
        descEl.removeAttribute('data-i18n');
        descEl.textContent = tt('wai_sk' + id + '_d');
        skillPanel.classList.remove('pop');
        void skillPanel.offsetWidth;
        skillPanel.classList.add('pop');
      };
      node.addEventListener('click', select);
      if (node.tagName !== 'BUTTON') {
        node.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(); }
        });
      }
    });
  }

  /* ── SVG buddy: mini-Burak roams the Who am I page ── */
  if (document.querySelector('.wai-hero') && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const buddy = document.createElement('div');
    buddy.className = 'char-buddy is-walking';
    buddy.setAttribute('aria-hidden', 'true');
    const sprite = document.createElement('img');
    sprite.src = './cv/char.svg';
    sprite.alt = '';
    sprite.draggable = false;
    const bubble = document.createElement('div');
    bubble.className = 'pb-bubble';
    buddy.appendChild(sprite);
    buddy.appendChild(bubble);
    document.body.appendChild(buddy);

    const BW = 112;              /* buddy hitbox width */
    const WALK = 38, RUN = 330;  /* px per second */
    const FLEE_AT = 175, SAFE_AT = 320;
    const maxX = () => Math.max(8, window.innerWidth - BW - 8);

    let x = 8 + Math.random() * (maxX() - 8);
    let dir = 1;
    let state = 'walk';
    let targetX = 8 + Math.random() * (maxX() - 8);
    let idleLeft = 0;
    let mouseX = -1e4, mouseY = -1e4;
    let immuneUntil = 0;

    const tt = (k) => (window.SchematrixI18N ? window.SchematrixI18N.t(k) : k);
    const setState = (s) => {
      if (state === s) return;
      state = s;
      buddy.classList.remove('is-walking', 'is-fleeing', 'is-idle', 'is-caught');
      buddy.classList.add('is-' + (s === 'walk' ? 'walking' : s === 'flee' ? 'fleeing' : s));
    };
    const newTarget = () => { targetX = 8 + Math.random() * (maxX() - 8); };

    document.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'mouse' || e.pointerType === 'pen') {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }
    }, { passive: true });

    const caught = () => {
      if (state === 'caught' || performance.now() < immuneUntil) return;
      setState('caught');
      bubble.textContent = tt('char_caught_' + (1 + Math.floor(Math.random() * 4)));
      buddy.classList.add('talking');
      setTimeout(() => {
        buddy.classList.remove('talking');
        immuneUntil = performance.now() + 2000;
        newTarget();
        setState('walk');
      }, 2600);
    };
    buddy.addEventListener('mouseenter', caught);
    buddy.addEventListener('click', caught);

    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!document.hidden) {
        const cx = x + BW / 2;
        const cy = window.innerHeight - 46;
        const dx = cx - mouseX;
        const dist = Math.hypot(dx, cy - mouseY);

        if (state !== 'caught') {
          if (dist < FLEE_AT && now >= immuneUntil) {
            setState('flee');
          } else if (state === 'flee' && dist > SAFE_AT) {
            newTarget();
            idleLeft = 1 + Math.random() * 2;
            setState(Math.random() < 0.4 ? 'idle' : 'walk');
          }
        }

        if (state === 'walk') {
          dir = targetX > x ? 1 : -1;
          x += dir * WALK * dt;
          if (Math.abs(x - targetX) < 4) {
            idleLeft = 1.2 + Math.random() * 2.5;
            setState('idle');
          }
        } else if (state === 'idle') {
          idleLeft -= dt;
          if (idleLeft <= 0) { newTarget(); setState('walk'); }
        } else if (state === 'flee') {
          dir = dx >= 0 ? 1 : -1;
          x += dir * RUN * dt;
          /* Duck off one edge and re-enter on the other when cornered. */
          if (x <= 8 && dir === -1) x = maxX();
          else if (x >= maxX() && dir === 1) x = 8;
        }
        x = Math.max(8, Math.min(maxX(), x));

        buddy.classList.toggle('flip', dir === -1);
        buddy.style.transform = 'translateX(' + x + 'px)';
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
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
