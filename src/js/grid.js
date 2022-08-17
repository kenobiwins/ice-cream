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
  itemSelector: '.grid-item',
  gutter: gut,
  stagger: 30,
  
});

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
