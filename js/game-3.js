import statsElement from './stats';
import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import {timerData, livesData, gameThreeData} from './game-data';
import headerTemplate from './game-header';

const gameThreeTemplate = (data) => `
<div class="game">
  <p class="game__task">${data.task}</p>
  <form class="game__content  game__content--triple">
    ${data.answers.map((answer) => `
      <div class="game__option">
        <img src="${answer.image}" alt="${answer.description}" width="304" height="455">
      </div>
    `).join('')}
  </form>
  <div class="stats">
    <ul class="stats">
      ${data.stats.map((item)=>`<li class="stats__result stats__result--${item}"></li>`).join('')}
    </ul>
  </div>
</div>`;

const gameThreeElement = getElementFromTemplate(`${headerTemplate(timerData, livesData)} ${gameThreeTemplate(gameThreeData)}`);

const answersBlock = gameThreeElement.querySelector('.game__content');

answersBlock.onclick = (e) => {
  const answer = e.target.closest('.game__option');
  if (answer) {
    e.preventDefault();
    renderScreen(statsElement);
  }
};


export default gameThreeElement;
