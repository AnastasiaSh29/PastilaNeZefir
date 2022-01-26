let canvas = new Tip_canvas();
let ctx = canvas.getContext('2d');

let tip_storage = new Tip_drawers(canvas);

let img = document.querySelectorAll('.categories__link-img');
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener('mouseenter', show_tip);
  img[i].addEventListener('mouseleave', hide_tip);
  img[i].addEventListener('mousemove', move_tip);
}

function show_tip() {
  tip_storage[this.dataset.call](ctx);

  canvas.style.display = 'block';
}

function hide_tip() {
  canvas.style.display = 'none';
}

function move_tip(e) {
  let WID = document.documentElement.clientWidth;
  let HEI = document.documentElement.clientHeight;

  let x =
    e.pageX + 10 - (canvas.width + 20) * (WID < e.pageX + canvas.width + 20);
  let y =
    e.pageY + 10 - (canvas.width + 20) * (HEI < e.pageY + canvas.height + 20);

  canvas.style.left = x + 'px';
  canvas.style.top = y + 'px';
}

function Tip_drawers() {
  this.pastilaTip = function (ctx) {
    this.clear(ctx);
    ctx.font = '15px Arial';
    ctx.strokeText('Пастила вкуснейшая', 10, 20);
    ctx.beginPath();
  };

  this.fripsTip = function (ctx) {
    this.clear(ctx);
    ctx.font = '15px Arial';
    ctx.strokeText('Полезные снеки', 10, 20);
    ctx.beginPath();
  };
  this.setsTip = function (ctx) {
    this.clear(ctx);
    ctx.font = '15px Arial';
    ctx.strokeText('Витаминный заряд', 10, 20);
    ctx.beginPath();
  };

  this.clear = function (ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };
}

function Tip_canvas() {
  let canvas = document.createElement('canvas');
  console.dir(canvas);
  canvas.width = '150';
  canvas.height = '30';
  canvas.className = 'tip';
  canvas.style.display = 'none';

  document.body.appendChild(canvas);

  return canvas;
}
