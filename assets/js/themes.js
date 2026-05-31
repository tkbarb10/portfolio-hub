/* ──────────────────────────────────────────────
   themes.js — Three-theme cycle with localStorage
   Runs in <head> to prevent flash of wrong theme.
   ────────────────────────────────────────────── */

(function () {
  var THEMES = ['clean', 'dark'];
  var LABELS = { clean: 'Light', dark: 'Dark' };
  var KEY = 'portfolio-theme';

  var idx = 0;
  var saved = localStorage.getItem(KEY);
  if (saved && THEMES.indexOf(saved) !== -1) {
    idx = THEMES.indexOf(saved);
  }

  // Apply immediately — before paint — to prevent theme flash
  document.documentElement.setAttribute('data-theme', THEMES[idx]);

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;

    // Sync button label to current theme
    btn.textContent = LABELS[THEMES[idx]];

    btn.addEventListener('click', function () {
      idx = (idx + 1) % THEMES.length;
      document.documentElement.setAttribute('data-theme', THEMES[idx]);
      btn.textContent = LABELS[THEMES[idx]];
      localStorage.setItem(KEY, THEMES[idx]);

      // Let main.js know so it can start/stop particles
      document.dispatchEvent(
        new CustomEvent('themechange', { detail: THEMES[idx] })
      );
    });
  });
})();
