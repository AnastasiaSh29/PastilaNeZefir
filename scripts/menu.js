document.querySelector('.nav__block').onclick = function (event) {
  if (event.target.nodeName != 'SPAN') return;
  closeAllSubmenu(event.target.nextElementSibling);
  event.target.classList.add('nav__item-span_selected');
  event.target.nextElementSibling.classList.toggle('nav__submenu_active');
};

function closeAllSubmenu(current = null) {
  let parents = [];
  if (current) {
    let currentParent = current.parentNode;
    while (currentParent) {
      if (currentParent.classList.contains('nav__block')) break;
      if (currentParent.nodeName === 'UL') parents.push(currentParent);
      currentParent = currentParent.parentNode;
    }
  }
  const submenu = document.querySelectorAll('.nav__submenu');
  Array.from(submenu).forEach((i) => {
    if (i != current && !parents.includes(i)) {
      i.classList.remove('nav__submenu_active');
      if (i.previousElementSibling.nodeName === 'SPAN') {
        i.previousElementSibling.classList.remove('nav__item-span_selected');
      }
    }
  });
}

document.querySelector('.nav__block').onmouseleave = closeAllSubmenu;
