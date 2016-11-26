import gameTwoElement from './game-2';
import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import {timerData, livesData, gameOneData} from './game-data';
import headerTemplate from './game-header';


const questionTemplate = (question) => `
<div class="game__option">
  <img src="${question.image}" alt="${question.description}" width="468" height="458">
    ${question.answers.map((answer) => `
    <label class="game__answer game__answer--${answer.value}">
      <input name="question1" type="radio" value="${answer.value}">
      <span>${answer.text}</span>
    </label>`).join('')}
</div>`;

const gameOneTemplate = (data) => `<div class="game">
  <p class="game__task">${data.task}</p>
  <form class="game__content">${data.questions.map((question) => questionTemplate(question)).join('')}
  </form>
  <div class="stats">
    <ul class="stats">
      ${data.stats.map((item)=>`<li class="stats__result stats__result--${item}"></li>`).join('')}
    </ul>
  </div>
</div>`;

const gameOneElement = getElementFromTemplate(`${headerTemplate(timerData, livesData)} ${gameOneTemplate(gameOneData)}`);

const answersBlock = gameOneElement.querySelector('.game__content');

answersBlock.onclick = (e) => {
  const answer = e.target.closest('.game__answer');
  if (answer) {
    e.preventDefault();
    renderScreen(gameTwoElement);
  }
};

export default gameOneElement;
