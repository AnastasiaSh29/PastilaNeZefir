/* кнопка открывает попап*/
const buyButton = document.querySelector('.featured__buyButton');
/*затемнение на попап */
const popup = document.querySelectorAll('.popup');
const popupForm = document.querySelector('.popup__form');
/* попап-purchase*/
const popupPurchase = document.querySelector('.popup-purchase');
/*крестик закрытия попап-общий*/
const popupBtnClose = document.querySelector('.popup__btn-close');
/* кнопка submit попапа-профайл*/
const popupBtnSubmit = document.querySelector('.popup__btn-submit');
/* общий для закрытия попапов */
const root = document.querySelector('.root');

function openPopup(popup) {
  /* общий открытие попапов*/
  popup.classList.add('popup_opened');

  root.addEventListener('click', closeOnOverlay); /*закрытие по overlay */
  root.addEventListener('keydown', keyHandler); /*закрытие по esc */
}

function closePopup(popup) {
  /*общий закрытие попапов*/
  popup.classList.remove('popup_opened');

  root.removeEventListener('click', closeOnOverlay); /*закрытие по overlay */
  root.removeEventListener('keydown', keyHandler); /*закрытие по esc */
}

function closeOnOverlay(evt) {
  /*закрытие по overlay */
  if (evt.target.classList.contains('popup')) {
    evt.target.classList.remove('popup_opened');
  }
}

function keyHandler(evt) {
  /*закрытие по esc */
  const openedPopup = document.querySelector('.popup_opened');

  if (evt.key === 'Escape') {
    openedPopup.classList.remove('popup_opened');
  }
}

buyButton.addEventListener('click', function () {
  openPopup(popupPurchase);
});
/* закрытие попап */
popupBtnClose.addEventListener('click', function () {
  closePopup(popupPurchase);
});
/*временная функция */
popupBtnSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopup(popupPurchase);
});
