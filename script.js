document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById('slider');

  slider.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      slider.scrollBy({ left: e.deltaY < 0 ? -100 : 100, behavior: 'smooth' });
    }
  }, { passive: false });
});
