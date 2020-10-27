import slider from './modules/slider';
import toggle from './modules/toggle';
import Modal from './modules/modal';
import forms from './modules/forms';

'use strict';

let sliderPromo = document.querySelectorAll('.slider__promo'),
  sliderRect = document.querySelectorAll('.slider__rect');

document.querySelector('[data-id="btn-call"]').addEventListener('click', () => {
  let modal = new Modal();
  modal.setTitle('Request a call');
  modal.open();
  forms();
});

slider(sliderPromo, sliderRect);
toggle();
