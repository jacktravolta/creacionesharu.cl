// Theme toggle
(function(){
  const html = document.documentElement;
  const key = 'haru-theme';
  function applyTheme(theme){ html.classList.toggle('dark', theme === 'dark'); html.dataset.theme = theme; document.querySelectorAll('[data-theme-icon]').forEach(i=>{i.textContent = theme==='dark'?'☀️':'☀️';}); }
  function init(){
    const saved = localStorage.getItem(key);
    const pd = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (pd?'dark':'light'));
    document.querySelectorAll('[data-theme-toggle]').forEach(b=>{
      b.addEventListener('click',()=>{
        const next = html.classList.contains('dark')?‘light’:‘dark’;
        localStorage.setItem(key,next); applyTheme(next);
      });
    });
  }
  if(document.readyState===‘loading’)document.addEventListener(‘DOMContentLoaded’,init);else init();
})();