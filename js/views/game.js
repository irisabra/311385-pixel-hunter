import AbstractView from '../view';
import renderScreen from '../renderScreen';
import {AnswerType} from '../data/game-data';
import {initStats} from '../data/stats-utils';
import GameHeaderView from './game-header';
import GameStatsView from './game-stats';
import StatsView from './stats';
import {checkAnswerSpeed} from '../data/game-utils';
import gameModel from '../data/game-model';


export default class GameView extends AbstractView {
  constructor(data) {
    super();
    this.levelType = gameModel.state.questions[gameModel.state.level].type;
    this.header = new GameHeaderView(gameModel.state);

    this._interval = null;
  }

  getMarkup() {

    this.setTimer();

    const questionsTemplate = (images, answers) => images.map((image, index) =>
      `<div class="game__option" data-type="${image.mediaType}">
        <img src="${image.path}" alt="${image.description}" width="${image.width}" height="${image.height}">
        ${answers.map((answer) => `
        <label class="game__answer game__answer--${answer.value}">
          <input name="question-${index}" type="radio" value="${answer.value}">
          <span>${answer.text}</span>
        </label>`).join('')}
      </div>`
    ).join('');

    const getLevelContent = (levelData, type) => {
      const levelContent = {
        'game-1': `<form class="game__content">${questionsTemplate(levelData.images, levelData.answers)}</form>`,
        'game-2': `<form class="game__content game__content--wide">${questionsTemplate(levelData.images, levelData.answers)}</form>`,
        'game-3': `<form class="game__content game__content--triple">${questionsTemplate(levelData.images, levelData.answers)}</form>`
      };
      return levelContent[type];
    };

    return `<header class="header">${this.header.getMarkup()}</header>
    <div class="game">
    <p class="game__task">${gameModel.state.questions[gameModel.state.level].task}</p>
    ${getLevelContent(gameModel.state.questions[gameModel.state.level], gameModel.state.questions[gameModel.state.level].type)}
    ${new GameStatsView(gameModel.state.answers).getMarkup()}
    </div>`;
  }

  bindHandlers() {
    const answersBlock = this.element.querySelector('.game__content');

    const answerElementClass = {
      'game-1': 'game__answer',
      'game-2': 'game__answer',
      'game-3': 'game__option'
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
      this.changeLevel(isCorrect ? checkAnswerSpeed(data.time) : AnswerType.WRONG);
    };

    const onAnswerGameThree = (element, container, data) => {
      const type = element.getAttribute('data-type');
      const isCorrect = (type === data.questions[data.level].mediaType);
      this.changeLevel(isCorrect ? checkAnswerSpeed(data.time) : AnswerType.WRONG);
    };

    const answerHandler = {
      'game-1': onAnswerGameOne,
      'game-2': onAnswerGameOne,
      'game-3': onAnswerGameThree
    };

    answersBlock.onclick = (e) => {
      const answer = e.target.closest(`.${answerElementClass[this.levelType]}`);
      if (answer) {
        answerHandler[this.levelType](answer, answersBlock, gameModel.state);
      }
    };
  }

  setTimer() {
    this._interval = setInterval(() => {
      if (gameModel.state.time === 0 ) {
        this.changeLevel(AnswerType.WRONG);
      } else {
        gameModel.tick();
        this.updateHeader();
      }
    }, 1000);
  }

  clearTimer() {
    clearInterval(this._interval);
  }

  changeLevel(answerType) {
    gameModel.setAnswer(answerType);

    if (answerType === AnswerType.WRONG) {
      gameModel.decrementLives();
    }

    gameModel.nextLevel();

    this.clearTimer();
    if (gameModel.state.level < gameModel.state.questions.length && !gameModel.isOver()) {
      gameModel.initLevelTime();
      renderScreen(new GameView().element);
    } else {
      renderScreen(new StatsView(initStats(gameModel.state)).element);
    }
  }

  updateHeader() {
    const headerEl = this.element.querySelector('.header');
    const header = new GameHeaderView(gameModel.state);
    headerEl.innerHTML = header.getMarkup();
    this.header = header;
  }
}
