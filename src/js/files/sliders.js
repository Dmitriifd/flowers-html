/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import '../../scss/libs/swiper.scss';
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector('.card__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.card__slider', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      slidesPerView: 1,
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      // autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация

      pagination: {
        el: '.card__slider-pagination',
        clickable: true,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      //   navigation: {
      //     prevEl: '.hero-button-prev',
      //     nextEl: '.hero-button-next',
      //   },

      // Брейкпоинты

      breakpoints: {
        320: {
          //   slidesPerView: 1.1,
          //   spaceBetween: 10,
          // autoHeight: true,
        },
        768: {
          //   slidesPerView: 2,
          //   spaceBetween: 20,
        },
        992: {
          //   slidesPerView: 3,
          //   spaceBetween: 20,
        },
        1268: {
          //   slidesPerView: 4,
        },
      },

      // События
      on: {},
    });
  }
  if (document.querySelector('.card-catalog__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.card-catalog__slider', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      slidesPerView: 1,
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      // autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация

      pagination: {
        el: '.card-catalog__slider-pagination',
        clickable: true,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      //   navigation: {
      //     prevEl: '.hero-button-prev',
      //     nextEl: '.hero-button-next',
      //   },

      // Брейкпоинты

      breakpoints: {
        320: {
          //   slidesPerView: 1.1,
          //   spaceBetween: 10,
          // autoHeight: true,
        },
        768: {
          //   slidesPerView: 2,
          //   spaceBetween: 20,
        },
        992: {
          //   slidesPerView: 3,
          //   spaceBetween: 20,
        },
        1268: {
          //   slidesPerView: 4,
        },
      },

      // События
      on: {},
    });
  }
  if (document.querySelector('.promo__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.promo__slider', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      slidesPerView: 1,
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      // autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация

      pagination: {
        el: '.promo-pagination',
        clickable: true,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      //   Кнопки "влево/вправо"
      navigation: {
        prevEl: '.promo__slide-prev',
        nextEl: '.promo__slide-next',
      },

      // Брейкпоинты

      breakpoints: {
        320: {
          //   slidesPerView: 1.1,
          //   spaceBetween: 10,
          // autoHeight: true,
        },
        440: {
          slidesPerView: 1.2,
          spaceBetween: 15,
          // autoHeight: true,
        },
        520: {
          slidesPerView: 1.4,
          spaceBetween: 15,
          // autoHeight: true,
        },
        640: {
          slidesPerView: 1.7,
          spaceBetween: 15,
          // autoHeight: true,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        992: {
          //   slidesPerView: 3,
          //   spaceBetween: 20,
        },
        1268: {
          //   slidesPerView: 4,
        },
      },

      // События
      on: {},
    });
  }
  if (document.querySelector('.bouquets__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.bouquets__slider', {
			// Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 1.1,
			spaceBetween: 20,
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			//   Кнопки "влево/вправо"
			navigation: {
				prevEl: '.bouquets__slider-prev',
				nextEl: '.bouquets__slider-next',
			},

			// Брейкпоинты

			breakpoints: {
				340: {
					slidesPerView: 1.2,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				375: {
					slidesPerView: 1.3,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				400: {
					slidesPerView: 1.4,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				432: {
					slidesPerView: 1.5,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				468: {
					slidesPerView: 1.7,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				534: {
					slidesPerView: 1.9,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				588: {
					slidesPerView: 2,
					//   spaceBetween: 15,
					// autoHeight: true,
				},
				620: {
					slidesPerView: 2.2,
					//   spaceBetween: 15,
					// autoHeight: true,
				},
				680: {
					slidesPerView: 2.4,
					//   spaceBetween: 15,
					// autoHeight: true,
				},
				740: {
					slidesPerView: 2.7,
					//   spaceBetween: 20,
				},
				840: {
					slidesPerView: 3,
					//   spaceBetween: 20,
				},
				920: {
					slidesPerView: 3.2,
				},
				980: {
					slidesPerView: 3.4,
				},
				1040: {
					slidesPerView: 3.7,
				},
				1120: {
					slidesPerView: 4,
					spaceBetween: 25,
				},
			},

			// События
			on: {},
		});
  }
	if (document.querySelector('.best-offer__slider')) {
		// Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.best-offer__slider', {
			// Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 1.1,
			spaceBetween: 20,
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			//   Кнопки "влево/вправо"
			navigation: {
				prevEl: '.best-offer__slider-prev',
				nextEl: '.best-offer__slider-next',
			},

			// Брейкпоинты

			breakpoints: {
				340: {
					slidesPerView: 1.2,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				375: {
					slidesPerView: 1.3,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				400: {
					slidesPerView: 1.4,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				432: {
					slidesPerView: 1.5,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				468: {
					slidesPerView: 1.7,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				534: {
					slidesPerView: 1.9,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				588: {
					slidesPerView: 2,
					//   spaceBetween: 15,
					// autoHeight: true,
				},
				620: {
					slidesPerView: 2.2,
					//   spaceBetween: 15,
					// autoHeight: true,
				},
				680: {
					slidesPerView: 2.4,
					//   spaceBetween: 15,
					// autoHeight: true,
				},
				740: {
					slidesPerView: 2.7,
					//   spaceBetween: 20,
				},
				840: {
					slidesPerView: 3,
					//   spaceBetween: 20,
				},
				920: {
					slidesPerView: 3.2,
				},
				980: {
					slidesPerView: 3.4,
				},
				1040: {
					slidesPerView: 3.7,
				},
				1120: {
					slidesPerView: 4,
					spaceBetween: 25,
				},
			},

			// События
			on: {},
		});
	}
	if (document.querySelector('.new-products__slider')) {
		// Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.new-products__slider', {
			// Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 1.1,
			spaceBetween: 20,
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			//   Кнопки "влево/вправо"
			navigation: {
				prevEl: '.new-products__slider-prev',
				nextEl: '.new-products__slider-next',
			},

			// Брейкпоинты

			breakpoints: {
				340: {
					slidesPerView: 1.2,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				375: {
					slidesPerView: 1.3,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				400: {
					slidesPerView: 1.4,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				432: {
					slidesPerView: 1.5,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				468: {
					slidesPerView: 1.7,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				534: {
					slidesPerView: 1.9,
					//   spaceBetween: 10,
					// autoHeight: true,
				},
				588: {
					slidesPerView: 2,
					//   spaceBetween: 15,
					// autoHeight: true,
				},
				620: {
					slidesPerView: 2.2,
					//   spaceBetween: 15,
					// autoHeight: true,
				},
				680: {
					slidesPerView: 2.4,
					//   spaceBetween: 15,
					// autoHeight: true,
				},
				740: {
					slidesPerView: 2.7,
					//   spaceBetween: 20,
				},
				840: {
					slidesPerView: 3,
					//   spaceBetween: 20,
				},
				920: {
					slidesPerView: 3.2,
				},
				980: {
					slidesPerView: 3.4,
				},
				1040: {
					slidesPerView: 3.7,
				},
				1120: {
					slidesPerView: 4,
					spaceBetween: 25,
				},
			},

			// События
			on: {},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
