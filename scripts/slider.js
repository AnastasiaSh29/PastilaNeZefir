let slider = {
  slides: ['mix1', 'mix2', 'mix3', 'mix4', 'mix5'],
  frame: 0,
  set: function (image) {
    document.getElementById(
      'slider__src'
    ).style.backgroundImage = `url (../images/${image}.jpg)`;
  },
  init: function () {
    this.set(this.slides[this.frame]);
  },
  left: function () {
    this.frame--;
    if (this.frame < 0) this.frame = this.slides.length - 1;
    this.set(this.slides[this.frame]);
  },
  right: function () {
    this.frame++;
    if (this.frame == this.slides.length) this.frame = 0;
    this.set(this.slides[this.frame]);
  },
};

window.onload = function () {
  slider.init();
  setInterval(function () {
    slider.right();
  }, 5000);
};
