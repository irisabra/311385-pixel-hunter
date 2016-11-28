import statsElement from './stats';
import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import {gameThreeData} from './game-data';
import headerTemplate from './game-header';
import gameStatsTemplate from './game-stats';
import questionsTemplate from './game-questions';

const gameThreeTemplate = (data) => `
<div class="game">
  <p class="game__task">${data.task}</p>
  <form class="game__content  game__content--triple">
      ${questionsTemplate(data.images, data.answers)}
  </form>
  ${gameStatsTemplate(data.stats)}
</div>`;

const gameThreeElement = getElementFromTemplate(`${headerTemplate} ${gameThreeTemplate(gameThreeData)}`);

const answersBlock = gameThreeElement.querySelector('.game__content');

answersBlock.onclick = (e) => {
  const answer = e.target.closest('.game__option');
  if (answer) {
    e.preventDefault();
    renderScreen(statsElement);
  }
};


export default gameThreeElement;
