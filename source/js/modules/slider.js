export default function slider(slides, indicators) {
  let slideIndex = 0;
  let timer = null;

  // Удаление слайдов
  function removeClasses() {
    slides.forEach(el => el.classList.add('visually-hidden'));
    indicators.forEach(el => el.classList.remove('slider__rect--active'));
  }

  // Показ слайдов
  function showSlides() {
    removeClasses()
    slides[slideIndex].classList.remove('visually-hidden');
    indicators[slideIndex].classList.add('slider__rect--active');
  }

  // Обработка крайних слайдов
  function moveBoundary() {
    if (slideIndex === slides.length) {
      slideIndex = 0;
    }
  }

  // Установка таймера
  function avtoSlide(delay) {
    clearInterval(timer);
    timer = setInterval(() => {
      slideIndex++;
      moveBoundary();
      showSlides();
    }, delay);
  }

  avtoSlide(2000);

  // событие при клике на индикатор
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('slider__rect')) {
      removeClasses();
      event.target.classList.add('slider__rect--active');
    }

    indicators.forEach((el, ind) => {
      if (el.classList.contains('slider__rect--active')) {
        slides[ind].classList.remove('visually-hidden');
      }
    });
  })
}
