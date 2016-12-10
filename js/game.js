import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import {AnswerType} from './data/game-data';
import {initStats} from './data/stats-utils';
import {getHeader, updateHeader} from './game-header';
import gameStatsTemplate from './game-stats';
import questionsTemplate from './game-questions';
import getStatsElement from './stats';
import {setTime, setLives, setLevel, setAnswer, isGameOver, checkAnswerSpeed} from './data/game-utils';

let interval = null;

const changeLevel = (data, answerType) => {

  data = setAnswer(data, answerType);

  if (answerType === AnswerType.WRONG) {
    data = setLives(data, data.lives - 1);
  }

  data = setLevel(data, data.level + 1 );
  clearInterval(interval);
  if (data.level < data.questions.length && !isGameOver(data)) {
    renderScreen(getGameElement(setTime(data, 30)));
  } else {
    renderScreen(getStatsElement(initStats(data)));
  }
};

const answersIsCorrect = (images, answers) => {
  return images.every((item, index) => {
    let answer = answers.find((ans) => ans.name === `question-${index}`);
    return item.mediaType === answer.value;
  });
};

const onAnswerGameOne = (element, container, data ) => {
  const radios = container.querySelectorAll('input[type="radio"]:checked');
  if (radios.length < data.questions[data.level].images.length) {
    return;
  }
  let checkedAnswers = [];
  for (const radio of radios) {
    checkedAnswers.push({
      name: radio.name,
      value: radio.value
    });
  }
  const isCorrect = answersIsCorrect(data.questions[data.level].images, checkedAnswers);
  changeLevel(data, isCorrect ? checkAnswerSpeed(data.time) : AnswerType.WRONG);
};

const onAnswerGameThree = (element, container, data ) => {
  const type = element.getAttribute('data-type');
  const isCorrect = (type === data.questions[data.level].mediaType);
  changeLevel(data, isCorrect ? checkAnswerSpeed(data.time) : AnswerType.WRONG);
};

const getGameElement = (data) => {

  interval = setInterval(() => {
    if (data.time === 0 ) {
      changeLevel(data, AnswerType.WRONG);
    } else {
      data = setTime(data, data.time - 1);
      updateHeader(getHeader(data.time, data.lives));
    }
  }, 1000);

  const levelType = data.questions[data.level].type;

  const getLevelContent = (levelData, type) => {

    const levelContent = {
      'game-1': `<form class="game__content">${questionsTemplate(levelData.images, levelData.answers)}</form>`,
      'game-2': `<form class="game__content game__content--wide">${questionsTemplate(levelData.images, levelData.answers)}</form>`,
      'game-3': `<form class="game__content game__content--triple">${questionsTemplate(levelData.images, levelData.answers)}</form>`
    };
    return levelContent[type];
  };

  const getArticle = (levelData) => `<header class="header">
  ${getHeader(levelData.time, levelData.lives)}
  </header>
  <div class="game">
  <p class="game__task">${levelData.questions[levelData.level].task}</p>
  ${getLevelContent(levelData.questions[levelData.level], levelData.questions[levelData.level].type)}
  ${gameStatsTemplate(levelData.answers)}
  </div>`;

  const gameLevelElement = getElementFromTemplate(getArticle(data));

  const answersBlock = gameLevelElement.querySelector('.game__content');

  const answerElementClass = {
    'game-1': 'game__answer',
    'game-2': 'game__answer',
    'game-3': 'game__option'
  };

  const answerHandler = {
    'game-1': onAnswerGameOne,
    'game-2': onAnswerGameOne,
    'game-3': onAnswerGameThree
  };

  answersBlock.onclick = (e) => {
    const answer = e.target.closest(`.${answerElementClass[levelType]}`);
    if (answer) {
      answerHandler[levelType](answer, answersBlock, data);
    }
  };

  return gameLevelElement;
};

export default getGameElement;
