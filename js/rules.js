import getGameElement from './game';
import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import {headerBack} from './header-back';
import {initialGame, initGame} from './data/game-utils';


export default () => {
  const content = `<div class="rules  central--none">
  <h1 class="rules__title">Правила</h1>
  <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
  src="img/photo_icon.png" width="16" height="16"> или рисунок <img
  src="img/paint_icon.png" width="16" height="16" alt="">.<br>
  Фотографиями или рисунками могут быть оба изображения.<br>
  На каждую попытку отводится 30 секунд.<br>
  Ошибиться можно не более 3 раз.<br>
  <br>
  Готовы?</p>
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
    renderScreen(getGameElement(initGame(initialGame)));
  };

  return rulesElement;
};
