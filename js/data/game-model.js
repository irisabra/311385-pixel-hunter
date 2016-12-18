import {initialGame, setTime, setLives, setLevel, setAnswer, isGameOver, initGame} from './game-utils';

class GameModel {
  constructor(state = initialGame) {
    this._state = state;
  }

  get state() {
    return this._state;
  }

  initLevelTime() {
    this._state = setTime(this._state, 30);
  }
  nextLevel() {
    this._state = setLevel(this._state, this._state.level + 1);
  }

  decrementLives() {
    this._state = setLives(this._state, this._state.lives - 1);
  }

  restart() {
    this._state = initGame(initialGame);
  }

  isOver() {
    return isGameOver(this._state);
  }

  setAnswer(answer) {
    this._state = setAnswer(this._state, answer);
  }

  tick() {
    this._state = setTime(this._state, this._state.time - 1);
  }
}

export default new GameModel();
