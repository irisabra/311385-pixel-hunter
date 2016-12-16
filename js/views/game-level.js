import AbstractView from '../view';
import {AnswerType} from '../data/game-data';
import GameStatsView from './game-stats';
import {checkAnswerSpeed} from '../data/game-utils';


export default class GameLevelView extends AbstractView {
  constructor(data) {
    super();
    this.state = data;
    this.currentQuestion = this.state.questions[this.state.level];
  }

  set onAnswer(handler) {
    this._onAnswer = handler;
  }

  getMarkup() {
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

    return `<div class="game">
    <p class="game__task">${this.currentQuestion.task}</p>
    ${getLevelContent(this.currentQuestion, this.currentQuestion.type)}
    ${new GameStatsView(this.state.answers).getMarkup()}
    </div>`;
  }

  bindHandlers() {
    const answersBlock = this.element.querySelector('.game__content');

    const answerElementClass = {
      'game-1': 'game__answer',
      'game-2': 'game__answer',
      'game-3': 'game__option'
    };

    const answerHandler = {
      'game-1': this.onAnswerGameOne,
      'game-2': this.onAnswerGameOne,
      'game-3': this.onAnswerGameThree
    };

    answersBlock.onclick = (e) => {
      const answer = e.target.closest(`.${answerElementClass[this.currentQuestion.type]}`);
      if (answer) {
        answerHandler[this.currentQuestion.type].bind(this)(answer, answersBlock);
      }
    };
  }

  onAnswerGameOne(element, container) {
    const radios = container.querySelectorAll('input[type="radio"]:checked');
    if (radios.length < this.currentQuestion.images.length) {
      return;
    }
    const checkedAnswers = [];
    for (const radio of radios) {
      checkedAnswers.push({
        name: radio.name,
        value: radio.value
      });
    }
    const isAnswerCorrect = (images, answers) => {
      return images.every((item, index) => {
        let answer = answers.find((ans) => ans.name === `question-${index}`);
        return item.mediaType === answer.value;
      });
    };
    const isCorrect = isAnswerCorrect(this.currentQuestion.images, checkedAnswers);
    this._onAnswer(isCorrect ? checkAnswerSpeed(this.state.time) : AnswerType.WRONG);
  }

  onAnswerGameThree(element, container) {
    const type = element.getAttribute('data-type');
    const isCorrect = (type === this.currentQuestion.mediaType);
    this._onAnswer(isCorrect ? checkAnswerSpeed(this.state.time) : AnswerType.WRONG);
  }

  update(state) {
    this.state = state;
    this.currentQuestion = this.state.questions[this.state.level];
    this.element.innerHTML = this.getMarkup();
    this.bindHandlers();
  }
}
