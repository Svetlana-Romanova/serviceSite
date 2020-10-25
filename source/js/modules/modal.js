export default class Modal {
  constructor() {
    this.elem = this.createModal();
    this.closeX();
    this.closeEsc(this.elem);
  }

  createModal() {
    let modal = document.createElement('div');
    modal.classList.add('overlay');
    modal.innerHTML = `
        <div class="modal">
          <div class="modal__inner">
          <div class="modal__header">
              <h5 class="modal__title"></h5>
              <button type="button" class="modal__close">
                  <span>&times;</span>
              </button>
          </div>
          <div class="modal__body">
              <form class="form__group">
                  <input type="tel" name="phone" class="form__input" placeholder="Enter phone">
                  <input type="password" name="password" class="form__input" placeholder="Enter password">
                  <button type="submit" class="form__btn">Submit</button>
              </form>
          </div>
        </div>`;

    return modal;
  }

  open() {
    let body = document.querySelector('body');
    body.append(this.elem);
    body.classList.add('is-modal-open');
  }

  setTitle(title) {
    let modalTitle = this.elem.querySelector('.modal__title');
    modalTitle.innerHTML = title;
  }

  setBody(elem) {
    let modalBody = this.elem.querySelector('.modal__body');
    modalBody.innerHTML = '';
    modalBody.append(elem);
  }

  close() {
    this.elem.remove();
    let body = document.querySelector('body');
    body.classList.remove('is-modal-open');
  }

  closeX() {
    let close = this.elem.querySelector('.modal__close');
    close.addEventListener('click', () => this.close());
  }

  closeEsc(elem) {
    let body = document.querySelector('body');
    let btns = document.querySelectorAll('.btn');
    body.addEventListener('keydown', function (event) {
      if (event.code === 'Escape') {
        elem.remove();
        body.classList.remove('is-modal-open');
        btns.forEach(el => el.blur());
      }
    });
  }
}
