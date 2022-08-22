// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

const likeBtn = document.querySelectorAll('.favorite-button');
const viewBtn = document.querySelectorAll('.card-catalog__view-button');
const cardList = document.querySelector('.card-list__catalog');
const cardDesc = document.querySelectorAll('.card-catalog__desc');
const cardCatalogLabels = document.querySelectorAll('.card-catalog__labels');

try {
    likeBtn.forEach((btn) => {
      btn.addEventListener('click', ({ target }) => {
        if (target.classList.contains('card-catalog__favorite-button')) {
          btn.classList.toggle('green');
        } else {
          btn.classList.toggle('red');
        }
      });
    });

    viewBtn.forEach((btn) => {
      btn.addEventListener('click', ({ target }) => {
        if (target.classList.contains('card-catalog__view-button')) {
          btn.classList.toggle('active');
        }
      });
    });

    cardList.addEventListener('click', ({ target }) => {
      if (target.closest('.card-catalog__view-button')) {
        cardDesc.forEach((item, i) => {
          item.classList.toggle('active');
          if (cardCatalogLabels[i]) {
            cardCatalogLabels[i].classList.toggle('active');
          }
        });
      }
    });
} catch (error) {
  console.log(error);  
}
