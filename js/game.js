import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import {statsData} from './game-data';
import header from './game-header';
import gameStatsTemplate from './game-stats';
import questionsTemplate from './game-questions';
import getStatsElement from './stats';


const getGameElement = (data, index) => {

  const levelType = data[index].type;

  const getLevelContent = (levelData, type) => {

    const levelContent = {
      'game-1': `<form class="game__content">${questionsTemplate(levelData.images, levelData.answers)}</form>`,
      'game-2': `<form class="game__content game__content--wide">${questionsTemplate(levelData.images, levelData.answers)}</form>`,
      'game-3': `<form class="game__content game__content--triple">${questionsTemplate(levelData.images, levelData.answers)}</form>`
    };

    return levelContent[type];
  };

  const getArticle = (levelData) => `${header}
  <div class="game">
  <p class="game__task">${levelData.task}</p>
  ${getLevelContent(levelData, levelType)}
  ${gameStatsTemplate(levelData.stats)}
  </div>`;

  const gameLevelElement = getElementFromTemplate(getArticle(data[index]));

  const answersBlock = gameLevelElement.querySelector('.game__content');
  const answerElementClass = {
    'game-1': 'game__answer',
    'game-2': 'game__answer',
    'game-3': 'game__option'
  };

  answersBlock.onclick = (e) => {
    const answer = e.target.closest(`.${answerElementClass[levelType]}`);
    if (answer) {
      e.preventDefault();
      index++;
      if (index < data.length) {
        renderScreen(getGameElement(data, index));
      } else {
        renderScreen(getStatsElement(statsData));
      }
    }
  };
  return gameLevelElement;
};

export default getGameElement;
