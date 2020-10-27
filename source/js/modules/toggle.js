export default function toggle() {
  let toggleMain = document.querySelector('.main-nav__toggle'),
    navList = document.querySelector('.main-nav__list'),
    nav = document.querySelector('.main-nav'),
    body = document.querySelector('body');

  toggleMain.addEventListener('click', (event) => {
    toggleMain.classList.toggle('active');
    navList.classList.toggle('d-none');

    if (toggleMain.classList.contains('active')) {
      nav.classList.add('main-nav--adaptive');
      body.style.overflow = 'hidden';
      document.querySelector('.container').style.maxWidth = '100%';
    } else {
      nav.classList.remove('main-nav--adaptive');
      body.style.overflow = '';
    }
  });
}
