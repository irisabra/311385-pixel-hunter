import {questionsData, AnswerType} from './game-data';

export const initialGame = {
  time: 30,
  lives: 3,
  level: 0,
  questions: questionsData,
  answers: Array.from(new Array(10), () => 'unknown')
};

export const setTime = (game, time) => {
  if (time < 0) {
    throw new RangeError('Time can not be negative');
  }
  return Object.assign({}, game, {time: time});
};

export const setLives = (game, lives) => {
  if (lives < 0) {
    throw new RangeError('Number of lives can not be negative');
  }
  return Object.assign({}, game, {lives: lives});
};

export const setLevel = (game, level) => {
  if (level < 0) {
    throw new RangeError('Level can not be negative');
  }
  return Object.assign({}, game, {level: level});
};

export const setAnswer = (game, answer) => {
  let gameWithAnswer = Object.assign({}, game);
  gameWithAnswer.answers[gameWithAnswer.level] = answer;
  return gameWithAnswer;
};

export const checkAnswerSpeed = (time) => {
  if (time < 10) {
    return AnswerType.SLOW;
  } else if (time < 20) {
    return AnswerType.CORRECT;
  } else {
    return AnswerType.FAST;
  }
};

export const gameIsOver = (game) => {
  return game.lives > 0 ? false : true;
};

export const initGame = (game) => {
  return Object.assign({}, game);
};
