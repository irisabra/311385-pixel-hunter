import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import {statsData} from './game-data';
import header from './game-header';
import gameStatsTemplate from './game-stats';
import questionsTemplate from './game-questions';
import getStatsElement from './stats';

let i = 0;

const getGameElement = (data) => {

  const levelType = data[i].type;

  const levelContent = (levelData, type) => {
    let content = '';
    switch (type) {
      case 'game-1':
        content = `<form class="game__content">${questionsTemplate(levelData.images, levelData.answers)}</form>`;
        break;
      case 'game-2':
        content = `<form class="game__content game__content--wide">${questionsTemplate(levelData.images, levelData.answers)}</form>`;
        break;
      case 'game-3':
        content = `<form class="game__content game__content--triple">${questionsTemplate(levelData.images, levelData.answers)}</form>`;
        break;
    }
    return content;
  };

  const article = (levelData) => `${header}
  <div class="game">
  <p class="game__task">${levelData.task}</p>
  ${levelContent(levelData, levelType)}
  ${gameStatsTemplate(levelData.stats)}
  </div>`;

  const gameLevelElement = getElementFromTemplate(article(data[i]));

  const answersBlock = gameLevelElement.querySelector('.game__content');

  answersBlock.onclick = (e) => {
    const answer = (levelType === 'game-3' ? e.target.closest('.game__option') : e.target.closest('.game__answer'));
    if (answer) {
      e.preventDefault();
      i++;
      if (i < data.length) {
        renderScreen(getGameElement(data));
      } else {
        renderScreen(getStatsElement(statsData));
      }
    }
  };
  return gameLevelElement;
};

export default getGameElement;
