// Theme toggle día/noche - persistente localStorage + prefers-color-scheme
(function(){
  const html = document.documentElement;
  const key = 'haru-theme';

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    html.classList.toggle('dark', isDark);
    html.dataset.theme = theme;
    updateIcons(theme);
  }

  function updateIcons(theme){
    document.querySelectorAll('[data-theme-icon]').forEach(icon => {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    });
  }

  function init() {
    const saved = localStorage.getItem(key);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    applyTheme(initial);

    const btns = document.querySelectorAll('[data-theme-toggle]');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const next = html.classList.contains('dark') ? 'light' : 'dark';
        localStorage.setItem(key, next);
        applyTheme(next);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
