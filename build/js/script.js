/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/modules/forms.js":
/*!************************************!*\
  !*** ./source/js/modules/forms.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return forms; });
function forms() {
  let forms = document.querySelectorAll('form'),
      inputs = document.querySelectorAll('input'),
      modal = document.querySelector('.modal');
  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  let postData = async (url, data) => {
    modal.textContent = message.loading;
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  };

  let clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };

  forms.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('modal');
      statusMessage.textContent = message.loading;
      item.appendChild(statusMessage);
      let formData = new FormData(item);
      postData('./server.php', formData).then(res => {
        modal.textContent = message.success;
      }).catch(() => modal.textContent = message.failure).finally(() => {
        clearInputs();
        setTimeout(() => {
          document.querySelector('.overlay').remove();
          document.querySelector('body').classList.remove('is-modal-open');
        }, 2000);
      });
    });
  });
}

/***/ }),

/***/ "./source/js/modules/modal.js":
/*!************************************!*\
  !*** ./source/js/modules/modal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
class Modal {
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

/***/ }),

/***/ "./source/js/modules/slider.js":
/*!*************************************!*\
  !*** ./source/js/modules/slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slider; });
function slider(slides, indicators) {
  let slideIndex = 0;
  let timer = null; // Удаление слайдов

  function removeClasses() {
    slides.forEach(el => el.classList.add('visually-hidden'));
    indicators.forEach(el => el.classList.remove('slider__rect--active'));
  } // Показ слайдов


  function showSlides() {
    removeClasses();
    slides[slideIndex].classList.remove('visually-hidden');
    indicators[slideIndex].classList.add('slider__rect--active');
  } // Обработка крайних слайдов


  function moveBoundary() {
    if (slideIndex === slides.length) {
      slideIndex = 0;
    }
  } // Установка таймера


  function avtoSlide(delay) {
    clearInterval(timer);
    timer = setInterval(() => {
      slideIndex++;
      moveBoundary();
      showSlides();
    }, delay);
  }

  avtoSlide(2000); // событие при клике на индикатор

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
  });
}

/***/ }),

/***/ "./source/js/modules/toggler.js":
/*!**************************************!*\
  !*** ./source/js/modules/toggler.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toggler; });
function toggler() {
  let togglerMain = document.querySelector('.main-nav__toggler'),
      navList = document.querySelector('.main-nav__list'),
      nav = document.querySelector('.main-nav'),
      body = document.querySelector('body');
  togglerMain.addEventListener('click', event => {
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

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./source/js/modules/slider.js");
/* harmony import */ var _modules_toggler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggler */ "./source/js/modules/toggler.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./source/js/modules/modal.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./source/js/modules/forms.js");




'use strict';

let sliderPromo = document.querySelectorAll('.slider__promo'),
    sliderRect = document.querySelectorAll('.slider__rect');
document.querySelector('[data-id="btn-call"]').addEventListener('click', () => {
  let modal = new _modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"]();
  modal.setTitle('Request a call');
  modal.open();
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
Object(_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])(sliderPromo, sliderRect);
Object(_modules_toggler__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=script.js.map