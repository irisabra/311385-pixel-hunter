import AbstractView from '../view';
import {AnswerType} from '../data/game-data';
import GameStatsView from './game-stats';
import {checkAnswerSpeed, QuestionType, MediaType} from '../data/game-utils';
import imageLoader from '../image-loader/image-loader.js';


export default class GameLevelView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.currentQuestion = this.state.questions[this.state.level];
    this.resizeImages();
  }

  set onAnswer(handler) {
    this._onAnswer = handler;
  }

  getMarkup() {
    const questionsTemplate = (images, questionType) => images.map((image, index) =>
    `<div class="game__option" data-type="${image.mediaType}">
    <img src="${image.url}" alt="Image ${index + 1}" width="${image.width}" height="${image.height}">
    ${questionType === QuestionType.ONE_OF_THREE ? '' : Object.values(MediaType).map((value) => `
    <label class="game__answer game__answer--${value}">
    <input name="question-${index}" type="radio" value="${value}">
    <span>${value}</span>
    </label>`).join('')}
    </div>`).join('');

    const getLevelContent = (levelData, type) => {

      const levelContent = new Map([
        [QuestionType.TWO_OF_TWO, `<form class="game__content">${questionsTemplate(levelData.images, type)}</form>`],
        [QuestionType.TINDER_LIKE, `<form class="game__content game__content--wide">${questionsTemplate(levelData.images, type)}</form>`],
        [QuestionType.ONE_OF_THREE, `<form class="game__content game__content--triple">${questionsTemplate(levelData.images, type)}</form>`]
      ]);
      return levelContent.get(type);
    };

    return `<div class="game">
    <p class="game__task">${this.currentQuestion.task}</p>
    ${getLevelContent(this.currentQuestion, this.currentQuestion.type)}
    ${new GameStatsView(this.state.answers).getMarkup()}
    </div>`;
  }

  bindHandlers() {
    const answersBlock = this.element.querySelector('.game__content');

    const answerElementClass = new Map([
      [QuestionType.TWO_OF_TWO, 'game__answer'],
      [QuestionType.TINDER_LIKE, 'game__answer'],
      [QuestionType.ONE_OF_THREE, 'game__option']
    ]);

    const answerHandler = new Map([
      [QuestionType.TWO_OF_TWO, this.onAnswerGameOne],
      [QuestionType.TINDER_LIKE, this.onAnswerGameOne],
      [QuestionType.ONE_OF_THREE, this.onAnswerGameThree]
    ]);

    answersBlock.onclick = (e) => {
      const answer = e.target.closest(`.${answerElementClass.get(this.currentQuestion.type)}`);
      if (answer) {
        answerHandler.get(this.currentQuestion.type).call(this, answer, answersBlock);
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

  resizeImages() {
    const images = this.element.querySelectorAll('img');
    let index = 0;
    for (let image of images) {
      imageLoader(image).load({
        url: this.currentQuestion.images[index].url,
        width: this.currentQuestion.images[index].width,
        height: this.currentQuestion.images[index].height
      });
      index++;
    }
  }
  update(state) {
    this.state = state;
    this.currentQuestion = this.state.questions[this.state.level];
    this.element.innerHTML = this.getMarkup();
    this.bindHandlers();
    this.resizeImages();
  }
}
