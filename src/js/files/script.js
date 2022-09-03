// Подключение функционала "Чертогов Фрилансера"
import { isMobile, _slideUp } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

const likeBtn = document.querySelectorAll('.favorite-button');
const viewBtn = document.querySelectorAll('.card-catalog__view-button');
const cardList = document.querySelector('.card-list__catalog');
const cardDesc = document.querySelectorAll('.card-catalog__desc');
const cardCatalogLabels = document.querySelectorAll('.card-catalog__labels');
const wrapper = document.querySelector('.wrapper');
const popup = document.querySelector('.header-popup');
const popupBtnClose = document.querySelector('.header-popup__button');

const headerLabel = document.querySelector('.header-label');
const flowersDeliveryButton = document.querySelector('.flowers-delivery__button');
const flowersDeliveryWrapper = document.querySelector('.flowers-delivery__wrapper');
const buttonText = flowersDeliveryButton.querySelector('span');

/* Кнопка свернуть */

flowersDeliveryButton.addEventListener('click', () => {
	flowersDeliveryWrapper.classList.toggle('active');
	flowersDeliveryButton.classList.toggle('active');

	if (flowersDeliveryButton.classList.contains('active')) {
		buttonText.textContent = 'Развернуть текст';
	} else {
		buttonText.textContent = 'Свернуть текст';
	}
});

/* Favorite */

let counter = 0;
likeBtn.forEach((fovoriteBtn) => {
	fovoriteBtn.addEventListener('click', () => {
		if (!fovoriteBtn.classList.contains('red')) {
			counter++;
			headerLabel.textContent = counter;
			headerLabel.style.display = 'block';
		} else {
			counter--;
			headerLabel.textContent = counter;
			if (counter === 0) {
				headerLabel.style.display = 'none';
			}
		}
		console.log(counter);
	});
});

/* NavBar */

const navbarlink = document.querySelectorAll('.navbar-mobile__link');
const navbarList = document.querySelector('.navbar-mobile__list');

const setActiveLink = (anchor) => {
	navbarlink.forEach((navItem) => {
		navItem.classList.toggle('active', anchor === navItem.getAttribute('href'));
	});
};

const navBarClickHandler = (e) => {
	const link = e.target.closest('a');

	if (!link) {
		return;
	}

	const anchor = link.getAttribute('href');
	setActiveLink(anchor);
};

navbarList.addEventListener('click', navBarClickHandler);

/* header-popup */

try {
	popupBtnClose.addEventListener('click', () => {
		_slideUp(popup);
	});
} catch (error) {
	console.log(error);
}

/* likeBtn &  viewBtn */

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

/* copy promocode text */

const btnPromocode = document.querySelector('.promocode__button');
const promocodeNotion = document.querySelector('.promocode__notion');

const copyText = () => {
	// Select the email link anchor text
	const promocode = document.querySelector('.promocode__name');
	const range = document.createRange();
	range.selectNode(promocode);
	window.getSelection().addRange(range);

	try {
		// Now that we've selected the anchor text, execute the copy command
		const successful = document.execCommand('copy');
		const msg = successful ? 'successful' : 'unsuccessful';
		console.log('Copy email command was ' + msg);
		promocodeNotion.classList.add('active');
		setTimeout(() => {
			promocodeNotion.classList.remove('active');
		}, 1000);
	} catch (err) {
		console.log('Oops, unable to copy');
	}

	// Remove the selections - NOTE: Should use
	// removeRange(range) when it is supported
	window.getSelection().removeAllRanges();
};

btnPromocode.addEventListener('click', copyText);
