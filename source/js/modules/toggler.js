export default function toggler() {
  let togglerMain = document.querySelector('.main-nav__toggler'),
    navList = document.querySelector('.main-nav__list'),
    nav = document.querySelector('.main-nav'),
    body = document.querySelector('body');

  togglerMain.addEventListener('click', (event) => {
    togglerMain.classList.toggler('active');
    navList.classList.toggler('d-none');

    if (togglerMain.classList.contains('active')) {
      nav.classList.add('main-nav--adaptive');
      body.style.overflow = 'hidden';
      document.querySelector('.container').style.maxWidth = '100%';
    } else {
      nav.classList.remove('main-nav--adaptive');
      body.style.overflow = '';
    }
  });
}
