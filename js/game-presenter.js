import Application from './application';
import {AnswerType} from './data/game-utils';
import HeaderView from './views/header';
import GameLevelView from './views/game-level';
import gameModel from './data/game-model';


class GamePresenter {
  constructor(questionsData) {
    gameModel.initQuestionsData = questionsData;
    this._header = new HeaderView(gameModel.state);
    this._header.onBack = () => {
      this.exit();
      Application.showRules();
    };

    this._content = new GameLevelView(gameModel.state);
    this._content.onAnswer = this.changeLevel.bind(this);

    this.root = document.createElement('div');
    this.root.appendChild(this._header.element);
    this.root.appendChild(this._content.element);

    this._interval = null;
  }
  exit() {
    this.clearTimer();
    gameModel.restart();
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
  start() {
    gameModel.restart();
    this.setTimer();
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
      this.updateContent();
      this.updateHeader();
      this.setTimer();
    } else {
      Application.showStats(gameModel.state, this.exit.bind(this));
    }
  }

  updateHeader() {
    this._header.update(gameModel.state);
    this.root.replaceChild(this._header.element, this._header.element);
  }

  updateContent() {
    this._content.update(gameModel.state);
    this.root.replaceChild(this._content.element, this._content.element);
  }

}

export default (questionsData) => {
  const game = new GamePresenter(questionsData);
  game.start();
  return game.root;
};
