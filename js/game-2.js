import gameThreeElement from './game-3';
import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import {timerData, livesData, gameTwoData} from './game-data';
import headerTemplate from './game-header';

const gameTwoTemplate = (data) => `
  <div class="game">
    <p class="game__task">${data.task}</p>
    <form class="game__content  game__content--wide">
      ${data.questions.map((question)=> `
        <div class="game__option">
          <img src="${question.image}" alt="${question.description}" width="705" height="455">
          ${question.answers.map((answer)=> `
            <label class="game__answer  game__answer--${answer.value}">
              <input name="question1" type="radio" value="${answer.value}">
              <span>${answer.text}</span>
            </label>
          `).join('')}
        </div>
      `).join('')}
    </form>
    <div class="stats">
      <ul class="stats">
        ${data.stats.map((item)=>`<li class="stats__result stats__result--${item}"></li>`).join('')}
      </ul>
    </div>
    </div>`;

const gameTwoElement = getElementFromTemplate(`${headerTemplate(timerData, livesData)} ${gameTwoTemplate(gameTwoData)}`);

const answersBlock = gameTwoElement.querySelector('.game__content');

answersBlock.onclick = (e) => {
  const answer = e.target.closest('.game__answer');
  if (answer) {
    e.preventDefault();
    renderScreen(gameThreeElement);
  }
};

export default gameTwoElement;
