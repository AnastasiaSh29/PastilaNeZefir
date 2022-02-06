let position = 0;
const slidesToShow = 4;
const slidesToScroll = 2;
const container = document.querySelector('.slider');
const track = document.querySelector('.slider__block');
const btnPrev = document.querySelector('.slider__button-prev');
const btnNext = document.querySelector('.slider__button-next');
const items = document.querySelectorAll('.slider__img');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;
  position +=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};
checkBtns();

// const slider = document.querySelector('.slider');
// const sliderBlock = document.querySelector('.slider__block');
// const sliderImg = document.querySelectorAll('.slider__img');
// const sliderNav = document.querySelectorAll('.slider__nav');

// let activeOrder = 0;
// init();

// function init() {
//   for (let i = 0; i < sliderImg.length; i++) {
//     const slide = sliderImg[i];

//     slide.dataset.order = i;
//     slide.style.transform = 'translate(-50%, -50%)';
//     slide.addEventListener('click', clickHandler);
//   }
//   for (const navigation of sliderNav) {
//     navigation.addEventListener('click', navigationHandler);
//   }
//   activeOrder = Math.floor(sliderImg.length / 2);

//   update();
// }

// function update() {
//   const { width, height } = sliderBlock.getBoundingClientRect();

//   const a = width / 2;
//   const b = height / 2;

//   const delta = Math.PI / sliderImg.length / 4;

//   for (let i = 0; i < sliderImg.length; i++) {
//     const leftSlide = document.querySelector(
//       `.slider__img[data-order="${activeOrder - i}"]`
//     );

//     if (leftSlide) {
//       leftSlide.style.zIndex = sliderImg.length - i;
//       leftSlide.style.opacity = 1 - (i * 1.5) / sliderImg.length;

//       leftSlide.style.left = `${
//         width / 2 + a * Math.cos((Math.PI * 3) / 2 - delta * i * 2)
//       }px`;

//       leftSlide.style.top = `${
//         -b * Math.sin((Math.PI * 3) / 2 - delta * i * 2)
//       }px`;
//     }
//     const rightSlide = document.querySelector(
//       `.slider__img[data-order="${activeOrder + i}"]`
//     );

//     if (rightSlide) {
//       rightSlide.style.zIndex = sliderImg.length - i;
//       rightSlide.style.opacity = 1 - (2 * i) / sliderImg.length;

//       rightSlide.style.left = `${
//         width / 2 + a * Math.cos((Math.PI * 3) / 2 + delta * i * 2)
//       }px`;

//       rightSlide.style.top = `${
//         -b * Math.sin((Math.PI * 3) / 2 + delta * i * 2)
//       }px`;
//     }
//   }
// }

// function clickHandler() {
//   const order = parseInt(this.dataset.order, 10);
//   activeOrder = order;
//   update();
// }

// function navigationHandler(e) {
//   e.preventDefault();
//   const { dir } = this.dataset;

//   if (dir === 'prev') {
//     activeOrder = Math.max(0, activeOrder - 1);
//     console.log('prev', activeOrder);
//   } else if (dir === 'next') {
//     activeOrder = Math.max(sliderImg.length - 1, activeOrder + 1);
//     console.log('next', activeOrder);
//   }
//   update();
// }

// let slider = {
//   slides: ['mix1', 'mix2', 'mix3', 'mix4', 'mix5'],
//   frame: 0,
//   set: function (image) {
//     document.getElementById(
//       'slider__src'
//     ).style.backgroundImage = `url (../images/${image}.jpg)`;
//   },
//   init: function () {
//     this.set(this.slides[this.frame]);
//   },
//   left: function () {
//     this.frame--;
//     if (this.frame < 0) this.frame = this.slides.length - 1;
//     this.set(this.slides[this.frame]);
//   },
//   right: function () {
//     this.frame++;
//     if (this.frame == this.slides.length) this.frame = 0;
//     this.set(this.slides[this.frame]);
//   },
// };

// window.onload = function () {
//   slider.init();
//   setInterval(function () {
//     slider.right();
//   }, 5000);
// };
