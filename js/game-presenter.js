import Application from './application';
import {AnswerType} from './data/game-utils';
import HeaderView from './views/header';
import GameLevelView from './views/game-level';
import gameModel from './data/game-model';


class GamePresenter {
  constructor(questionsData) {
    gameModel.initQuestionsData = questionsData;
    this.header = new HeaderView(gameModel.state);
    this.header.onBack = () => {
      this.exit();
      Application.showRules();
    };

    this.content = new GameLevelView(gameModel.state);
    this.content.onAnswer = this.changeLevel.bind(this);

    this.root = document.createElement('div');
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);

    this._interval = null;
  }
  exit() {
    this.clearTimer();
    gameModel.restart();
    this.updateHeader();
    this.updateContent();
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
    this.header.update(gameModel.state);
    this.root.replaceChild(this.header.element, this.header.element);
  }

  updateContent() {
    this.content.update(gameModel.state);
    this.root.replaceChild(this.content.element, this.content.element);
  }

}

export default (questionsData) => {
  const game = new GamePresenter(questionsData);
  game.start();
  return game.root;
};
