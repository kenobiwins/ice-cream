import Masonry from 'masonry-layout';

var gut;

const desktop = window.matchMedia('(min-width: 1200px)');
const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1199px)');
const mobile = window.matchMedia('(max-width: 767.9px)');
var elem = document.querySelector('.grid');

if (desktop.matches) {
  gut = 7.99;
} else if (tablet.matches) {
  gut = 6.07;
} else gut = 2.53;

var msnry = new Masonry(elem, {
  itemSelector: '.grid__item',
  gutter: gut,
  // columnWidth: 30,
  stagger: 30,
});

elem.addEventListener('click', function (event) {
 
  // don't proceed if item was not clicked on
  if (event.target.classList.contains('grid__img')) {
    // change size of item via class
    console.log();
    event.target.closest(".grid__item").classList.toggle('grid__item--gigante');
    // trigger layout
    msnry.layout();
  }
});

console.log(msnry);

function setMsnry(gut) {
  msnry.options.gutter = gut;
}

// Register event listener
desktop.addEventListener('change', e => {
  if (e.matches) {
    setMsnry(7.99);
  }
});

// Register event listener
tablet.addEventListener('change', e => {
  if (e.matches) {
    setMsnry(6.07);
  }
});

// Register event listener
mobile.addEventListener('change', e => {
  if (e.matches) {
    setMsnry(2.53);
  }
});
