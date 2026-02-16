(function () {
  const menuToggle = document.getElementById('menuToggle');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const collapsed = document.body.classList.toggle('sidebar-collapsed');
      menuToggle.setAttribute('aria-expanded', String(!collapsed));
      menuToggle.textContent = collapsed ? 'Menüyü Aç' : 'Menüyü Kapat';
    });
  }
})();
