import introElement from './intro';
import greetingElement from './greeting';
import rulesElement from './rules';
import gameOneElement from './game-1';
import gameTwoElement from './game-2';
import gameThreeElement from './game-3';
import statsElement from './stats';

// Slides changer

const mainElement = document.getElementById('main');

const switcher = document.createElement('div');
switcher.innerHTML = '' +
'<span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>   ' +
'<span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>';
switcher.style.cssText = 'text-align: center';
mainElement.after(switcher);

const slides = [
  introElement,
  greetingElement,
  rulesElement,
  gameOneElement,
  gameTwoElement,
  gameThreeElement,
  statsElement
];
let current = -1;

const select = (index) => {
  current = index;
  mainElement.innerHTML = '';
  mainElement.appendChild(slides[index]);
};

document.querySelector('.next').onclick = (e) => {
  e.preventDefault();

  select(current + 1);
};

document.querySelector('.prev').onclick = (e) => {
  e.preventDefault();

  select(current - 1);
};

select(0);
