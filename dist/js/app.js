/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
/*---------------------------------------------------------------------------
Webp support
---------------------------------------------------------------------------*/
function isWebp() {
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}

/*---------------------------------------------------------------------------
Burger menu
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".menu__icon");
   const menuBody = document.querySelector(".menu__body");
   const body = document.querySelector("body");
   const menuBodyClose = document.querySelector(".menu__body-close");

   if (menuIcon && menuBody) {
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      menuBody.addEventListener("click", function (event) {
         const target = event.target;
         const isLink = target.tagName === "A" || target.closest("a");
         const isPopupButton = target.classList.contains("open-popup") || target.closest(".open-popup");

         if (isLink || isPopupButton) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });

      if (menuBodyClose) {
         menuBodyClose.addEventListener("click", function () {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         });
      }

      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });
   }
});


/*---------------------------------------------------------------------------
Phone mask
---------------------------------------------------------------------------*/
window.addEventListener("DOMContentLoaded", function () {
   [].forEach.call(document.querySelectorAll('input.tel-mask'), function (input) {
      var keyCode;
      function mask(event) {
         event.keyCode && (keyCode = event.keyCode);
         var pos = this.selectionStart;
         if (pos < 3) event.preventDefault();
         var matrix = "+7 (___) ___ __ __",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function (a) {
               return i < val.length ? val.charAt(i++) : a
            });
         i = new_value.indexOf("_");
         if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
         }
         var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function (a) {
               return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
         reg = new RegExp("^" + reg + "$");
         if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = new_value;
         }
         if (event.type == "blur" && this.value.length < 5) {
            this.value = "";
         }
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
   });
});


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

/*---------------------------------------------------------------------------
Search
---------------------------------------------------------------------------*/
const menuSearch = document.querySelector('.menu__search');
const form = menuSearch?.querySelector('.menu__search-form');
const toggleBtn = menuSearch?.querySelector('.menu__search-btn');
const input = form?.querySelector('input');

if (menuSearch && form && toggleBtn && input) {
   if (window.innerWidth > 1200) {
      toggleBtn.addEventListener('click', (e) => {
         if (!menuSearch.classList.contains('active')) {
            e.preventDefault();
            menuSearch.classList.add('active');
            input.focus();
         } else {
            form.requestSubmit();
         }
      });

      document.addEventListener('click', (e) => {
         if (!menuSearch.contains(e.target)) {
            menuSearch.classList.remove('active');
         }
      });
   } else {
      toggleBtn.disabled = true;

      input.addEventListener('input', () => {
         toggleBtn.disabled = !input.value.trim();
      });
   }
}

/*---------------------------------------------------------------------------
Hero links show
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const container = document.querySelector(".hero__links");
   const toggleBtn = container?.querySelector(".hero__links-all");
   const tags = container ? container.querySelectorAll("a.tag") : [];

   if (toggleBtn && tags.length > 0) {
      toggleBtn.addEventListener("click", () => {
         if (window.innerWidth < 767) {
            toggleBtn.style.display = 'none';
            tags.forEach(tag => {
               tag.style.display = "block";
            });
         }
      });
   }
});


/*---------------------------------------------------------------------------
Map
---------------------------------------------------------------------------*/
function loadYandexMap() {
   if (window.ymaps) return;

   var script = document.createElement("script");
   script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
   script.onload = initMap;
   document.body.appendChild(script);
}

function initMap() {
   ymaps.ready(function () {
      var mapCenter = [55.880162, 37.724175];
      var myMap = new ymaps.Map('map', {
         center: mapCenter,
         zoom: 14,
      });

      var myPlacemark = new ymaps.Placemark(mapCenter, {
         hintContent: '"Rus Water Group"',
         balloonContent: 'г. Москва, Ярославское шоссе, д. 144А'
      });

      myMap.behaviors.disable('scrollZoom');
      myMap.controls.remove('searchControl');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('rulerControl');
      myMap.geoObjects.add(myPlacemark);
   });
}

const mapBlock = document.querySelector("#map");

if (mapBlock) {
   const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            loadYandexMap();
            obs.disconnect();
         }
      });
   });
   observer.observe(mapBlock);
}



/*---------------------------------------------------------------------------
Search form
---------------------------------------------------------------------------*/
const searchForm = document.querySelector('.search__form');

if (searchForm) {
   const input = searchForm.querySelector('input');
   const button = searchForm.querySelector('.search__send');

   input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
         button.removeAttribute('disabled');
      } else {
         button.setAttribute('disabled', 'true');
      }
   });
}

/*---------------------------------------------------------------------------
Move product price
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const productInfo = document.querySelector(".product__info");
   const productHead = document.querySelector(".product__head");
   const productInfoMob = document.querySelector(".product__info-mob");

   if (!productInfo || !productHead || !productInfoMob) return;

   function moveProductInfo() {
      if (window.innerWidth <= 767) {
         if (!productInfoMob.contains(productInfo)) {
            productInfoMob.appendChild(productInfo);
         }
      } else {
         if (!productHead.contains(productInfo)) {
            productHead.appendChild(productInfo);
         }
      }
   }

   moveProductInfo();
   window.addEventListener("resize", moveProductInfo);
});

/*---------------------------------------------------------------------------
Custom dropdown
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const dropdowns = document.querySelectorAll(".custom-dropdown");

   if (!dropdowns.length) return;

   dropdowns.forEach(dropdown => {
      const button = dropdown.querySelector(".custom-dropdown__button");
      const list = dropdown.querySelector(".custom-dropdown__list");

      if (!button || !list) return;

      button.addEventListener("click", (e) => {
         e.stopPropagation();

         dropdowns.forEach(d => {
            if (d !== dropdown) {
               d.querySelector(".custom-dropdown__button")?.classList.remove("active");
               d.querySelector(".custom-dropdown__list")?.classList.remove("show");
            }
         });

         button.classList.toggle("active");
         list.classList.toggle("show");
      });

      list.querySelectorAll(".custom-dropdown__item").forEach(item => {
         item.addEventListener("click", () => {
            button.childNodes[0].textContent = item.textContent;
            button.classList.remove("active");
            list.classList.remove("show");
         });
      });
   });

   document.addEventListener("click", (e) => {
      dropdowns.forEach(dropdown => {
         dropdown.querySelector(".custom-dropdown__button")?.classList.remove("active");
         dropdown.querySelector(".custom-dropdown__list")?.classList.remove("show");
      });
   });
});


/*---------------------------------------------------------------------------
add to fav and cart buttons
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   // product-preview
   const products = document.querySelectorAll(".product-preview");

   products.forEach(product => {
      const cartBtn = product.querySelector(".product-preview__cart");
      const redirectLink = product.querySelector(".product-preview__redirect");

      if (cartBtn && redirectLink) {
         cartBtn.addEventListener("click", () => {
            product.classList.add("added-cart");
         });
      }
   });

   // add cart
   const addCartButtons = document.querySelectorAll(".add-cart__button");

   addCartButtons.forEach(button => {
      button.addEventListener("click", () => {
         const addCart = button.closest(".add-cart");
         if (addCart) {
            addCart.classList.add("added");
         }
      });
   });

   // add fav 
   const favButtons = document.querySelectorAll(".product__add-fav");

   favButtons.forEach(button => {
      button.addEventListener("click", () => {
         button.classList.toggle("active");
      });
   });
});


/*---------------------------------------------------------------------------
FAQ
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const faqItems = document.querySelectorAll(".product__accordion-item");

   if (!faqItems.length) return;

   faqItems.forEach((item, index) => {
      const question = item.querySelector(".product__accordion-head");
      const answer = item.querySelector(".product__accordion-body");

      if (!question || !answer) return;

      if (index === 0) {
         item.classList.add("active");
         answer.style.maxHeight = answer.scrollHeight + 24 + "px";
      }

      question.addEventListener("click", () => {
         const isActive = item.classList.contains("active");

         if (isActive) {
            item.classList.remove("active");
            answer.style.maxHeight = null;
         } else {
            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + 24 + "px";
         }
      });
   });
});

/*---------------------------------------------------------------------------
Product gallery
---------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const sliderEl = document.querySelector('.product__slider');
   if (!sliderEl) return;

   const slides = sliderEl.querySelectorAll('.splide__slide');
   const perPage = 1;

   if (slides.length > perPage) {
      new Splide(sliderEl, {
         perPage: perPage,
         arrows: true,
         pagination: true,
         gap: '1rem',
      }).mount();
   } else {
      sliderEl.classList.remove('splide');
      sliderEl.querySelector('.splide__track')?.classList.remove('splide__track');
      sliderEl.querySelector('.splide__list')?.classList.remove('splide__list');
      slides.forEach(slide => slide.classList.remove('splide__slide'));
   }

   // fancybox
   Fancybox.bind('[data-fancybox="team-gallery"]', {
      Thumbs: { autoStart: false },
      Toolbar: { display: ['close'] },
      dragToClose: true,
   });
});


/*---------------------------------------------------------------------------
+/- buttons
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const quantities = document.querySelectorAll(".quantity");

   if (!quantities.length) return;

   quantities.forEach(quantity => {
      const input = quantity.querySelector(".quantity__input");
      const btnMinus = quantity.querySelector(".quantity__minus");
      const btnPlus = quantity.querySelector(".quantity__plus");

      if (!input || !btnMinus || !btnPlus) return;

      const updateState = () => {
         if (parseInt(input.value) <= 1) {
            input.value = 1;
            btnMinus.disabled = true;
         } else {
            btnMinus.disabled = false;
         }
      };

      btnMinus.addEventListener("click", () => {
         input.value = parseInt(input.value) - 1;
         updateState();
      });

      btnPlus.addEventListener("click", () => {
         input.value = parseInt(input.value) + 1;
         updateState();
      });

      updateState();
   });
});


/*---------------------------------------------------------------------------
Tabs
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   function initDropdown(attrName) {
      const items = document.querySelectorAll(`.custom-dropdown__item[data-${attrName}]`);
      if (!items.length) return;

      items.forEach(item => {
         item.addEventListener("click", () => {
            const selected = item.getAttribute(`data-${attrName}`);
            const fields = document.querySelectorAll(`.checkout__field[data-${attrName}]`);

            if (!fields.length) return;

            fields.forEach(field => field.classList.remove("show"));

            const targetField = document.querySelector(`.checkout__field[data-${attrName}="${selected}"]`);
            if (targetField) {
               targetField.classList.add("show");
            }
         });
      });
   }

   initDropdown("delivery");
   initDropdown("pay");
   initDropdown("profile");
});



/*---------------------------------------------------------------------------
Popups
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const openButtons = document.querySelectorAll('.open-popup');

   if (openButtons && openButtons.length > 0) {
      openButtons.forEach(button => {
         if (!button) return;
         button.addEventListener('click', function () {
            const popupId = this.dataset.popup;
            if (!popupId) return;

            const popup = document.getElementById(popupId);
            if (popup) {
               popup.classList.add('show');
               document.body.style.overflow = 'hidden';
            }
         });
      });
   }

   document.addEventListener('click', function (e) {
      const openPopup = document.querySelector('.popup.show');
      if (!openPopup) return;
      const isCloseBtn = e.target.closest('.popup__close');
      const isInsideBody = e.target.closest('.popup__body');
      const isPopupArea = e.target.closest('.popup');

      if (isCloseBtn || (!isInsideBody && isPopupArea)) {
         openPopup.classList.remove('show');
         document.body.style.overflow = '';
      }
   });
});

/*---------------------------------------------------------------------------
Password visibility toggle
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   document.querySelectorAll(".password-area").forEach(area => {
      const input = area.querySelector(".password-input")
      const icon = area.querySelector(".password-icon")
      if (!input || !icon) return

      icon.addEventListener("click", () => {
         const isOpen = input.type === "text"
         input.type = isOpen ? "password" : "text"
         icon.classList.toggle("active", !isOpen)
      })
   })
})

/*---------------------------------------------------------------------------
File upload
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const fileUploads = document.querySelectorAll(".file-upload");

   fileUploads.forEach(upload => {
      const input = upload.querySelector("input[type=file]");
      const container = upload.querySelector(".file-upload__container");

      if (!input || !container) return;

      input.addEventListener("change", () => {
         container.textContent = input.files.length > 0 ? input.files[0].name : "";
      });
   });
});

/*---------------------------------------------------------------------------
Change password in cabinet
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const changeBtn = document.querySelector(".userinfo__password-change");
   const saveBtn = document.querySelector(".userinfo__password-save");
   const currentBlock = document.querySelector(".userinfo__password-current");
   const form = document.querySelector(".userinfo__password-form");

   if (changeBtn && saveBtn && currentBlock && form) {
      changeBtn.addEventListener("click", () => {
         changeBtn.style.display = "none";
         currentBlock.style.display = "none";
         form.style.display = "block";
         saveBtn.style.display = "inline-block";
      });
   }
});


/*---------------------------------------------------------------------------
Cabinet accordion
---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------
FAQ
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const faqItems = document.querySelectorAll(".orders__item");

   if (!faqItems.length) return;

   faqItems.forEach((item, index) => {
      const question = item.querySelector(".orders__item-button");
      const answer = item.querySelector(".orders__item-list");

      if (!question || !answer) return;

      question.addEventListener("click", () => {
         const isActive = item.classList.contains("active");

         if (isActive) {
            item.classList.remove("active");
         } else {
            item.classList.add("active");
         }
      });
   });
});


document.addEventListener("DOMContentLoaded", () => {
   const productBlocks = document.querySelectorAll(".order__products");

   if (!productBlocks.length) return;

   productBlocks.forEach(block => {
      const button = block.querySelector(".order__products-button");
      const grid = block.querySelector(".order__products-grid");

      if (!button || !grid) return;

      button.addEventListener("click", () => {
         const isActive = block.classList.contains("active");

         if (isActive) {
            block.classList.remove("active");
         } else {
            block.classList.add("active");
         }
      });
   });
});

})();

/******/ })()
;