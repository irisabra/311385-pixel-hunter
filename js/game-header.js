import {headerBack} from './header-back';

export const getHeader = (time, lives) => `
  ${headerBack}
  <h1 class="game__timer">${time}</h1>
  <div class="game__lives">
    ${Array.from(new Array(3), (item, index) =>`<img src="img/heart__${(index < lives ? 'full' : 'empty')}.svg" class="game__heart" alt="Life" width="32" height="32">`).reverse().join('')}
  </div>`;

export const updateHeader = (template) => {
  const header = document.querySelector('.header');
  header.innerHTML = template;
};
