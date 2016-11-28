import gameThreeElement from './game-3';
import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import {gameTwoData} from './game-data';
import headerTemplate from './game-header';
import gameStatsTemplate from './game-stats';
import questionsTemplate from './game-questions';

const gameTwoTemplate = (data) => `
  <div class="game">
    <p class="game__task">${data.task}</p>
    <form class="game__content  game__content--wide">
      ${data.images.map((item, index ) => `
        <div class="game__option">
            ${questionsTemplate(data.images, data.answers)}
        </div>
      `).join('')}
    </form>
    ${gameStatsTemplate(data.stats)}
    </div>`;

const gameTwoElement = getElementFromTemplate(`${headerTemplate} ${gameTwoTemplate(gameTwoData)}`);

const answersBlock = gameTwoElement.querySelector('.game__content');

answersBlock.onclick = (e) => {
  const answer = e.target.closest('.game__answer');
  if (answer) {
    e.preventDefault();
    renderScreen(gameThreeElement);
  }
};

export default gameTwoElement;
