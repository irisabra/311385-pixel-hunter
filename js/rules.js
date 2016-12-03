import getGameElement from './game';
import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import {headerBack} from './header-back';
import {gameData} from './game-data';

export default (data) => {
  const content = `<div class="rules  central--none">
  <h1 class="rules__title">${data.title}</h1>
  <p class="rules__description">${data.text}</p>
  <form class="rules__form">
  <input class="rules__input" type="text" placeholder="Ваше Имя">
  <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
  </div>`;

  const article = `<header class="header">${headerBack}</header> ${content}`;
  const rulesElement = getElementFromTemplate(article);

  const rulesInput = rulesElement.querySelector('.rules__input');
  const rulesSubmit = rulesElement.querySelector('.rules__button');

  rulesInput.oninput = () => {
    if (rulesInput.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  rulesSubmit.onclick = (e) => {
    e.preventDefault();
    renderScreen(getGameElement(gameData, 0));
  };

  return rulesElement;
};
