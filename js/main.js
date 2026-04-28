/* ==============================================
   main.js — Путеводитель по Севастополю
   ============================================== */

/* --- 1. Sticky header: фон появляется при скролле --- */
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* --- 2. Бургер-меню --- */
/* Реализация в Этапе 2 */

/* --- 3. Подсветка активного пункта меню при скролле --- */
/* Реализация в Этапе 2 */

/* --- 4. FAQ аккордеон --- */
/* Реализация в Этапе 6 */

/* --- 5. Scroll-анимации (Intersection Observer) --- */
/* Реализация в Этапе 6 */
