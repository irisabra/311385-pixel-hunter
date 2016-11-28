import gameTwoElement from './game-2';
import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import {gameOneData} from './game-data';
import headerTemplate from './game-header';
import gameStatsTemplate from './game-stats';
import questionsTemplate from './game-questions';

const gameOneTemplate = (data) => `<div class="game">
  <p class="game__task">${data.task}</p>
  <form class="game__content">
    ${questionsTemplate(data.images, data.answers)}
  </form>
  ${gameStatsTemplate(data.stats)}
</div>`;

const gameOneElement = getElementFromTemplate(`${headerTemplate} ${gameOneTemplate(gameOneData)}`);

const answersBlock = gameOneElement.querySelector('.game__content');

answersBlock.onclick = (e) => {
  const answer = e.target.closest('.game__answer');
  if (answer) {
    e.preventDefault();
    renderScreen(gameTwoElement);
  }
};

export default gameOneElement;
