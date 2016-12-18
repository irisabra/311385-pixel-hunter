import {questionsData, AnswerType} from './game-data';

export const initialGame = {
  time: 30,
  lives: 3,
  level: 0,
  questions: questionsData,
  answers: Array.from(new Array(questionsData.length), () => 'unknown')
};

export const setTime = (game, time) => {
  if (time < 0) {
    throw new RangeError('Time can not be negative');
  }
  if (time > 30) {
    throw new RangeError('Time can not be more 30');
  }
  return Object.assign({}, game, {time: time});
};

export const setLives = (game, lives) => {
  if (lives < 0) {
    throw new RangeError('Number of lives can not be negative');
  }
  if (lives > 3) {
    throw new RangeError('Number of lives can not be more then 3');
  }
  return Object.assign({}, game, {lives: lives});
};

export const setLevel = (game, level) => {
  if (level < 0) {
    throw new RangeError('Level can not be negative');
  }
  if (level > game.questions.length) {
    throw new RangeError('Level can not be more then number of questions');
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

export const isGameOver = (game) => {
  return game.lives <= 0;
};

export const initGame = (game) => {
  return JSON.parse(JSON.stringify(game));
};
