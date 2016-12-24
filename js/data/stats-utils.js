import {AnswerType} from './game-utils';

export const initialStats = {
  status: 0,
  answers: [],
  total: 0,
  totalWithExtra: 0,
  extras: []
};

export const GameResultStatusType = {
  WIN: 0,
  FAIL: 1
};

export const gameResultTitle = new Map([
  [GameResultStatusType.WIN, 'Победа!'],
  [GameResultStatusType.FAIL, 'Поражение!']
]);


export const ExtraType = {
  LIVES: 'heart',
  FAST: 'fast',
  SLOW: 'slow'
};

export const extraTitle = new Map([
  [ExtraType.LIVES, 'Бонус за жизни:'],
  [ExtraType.FAST, 'Бонус за скорость:'],
  [ExtraType.SLOW, 'Штраф за медлительность:']
]);

export const initialExtra = {
  type: ExtraType.LIVES,
  amount: 0,
  total: 0
};

export const calculateStatusResult = (lives) => {
  return lives > 0 ? GameResultStatusType.WIN : GameResultStatusType.FAIL;
};

export const calculateScore = (answers, lives) => {
  if (lives === 0) {
    return 0;
  }
  const correctAnswers = answers.filter((item) => item === AnswerType.CORRECT || item === AnswerType.FAST || item === AnswerType.SLOW);
  return correctAnswers.length * 100;
};

export const calculateTotalScoreWithExtras = (total, extras) => {
  return extras.reduce((prev, curr) => prev + curr.total, total);
};

export const addLivesExtra = (extras, lives) =>{
  if (lives === 0) {
    return extras;
  }
  return extras.concat([
    {
      type: ExtraType.LIVES,
      amount: lives,
      total: lives * 50
    }
  ]);
};

export const addFastExtra = (answers, extras, lives) => {
  if (lives === 0) {
    return extras;
  }
  const fastAnswers = answers.filter((item) => item === AnswerType.FAST);
  if (fastAnswers.length === 0) {
    return extras;
  }
  return extras.concat([{
    type: ExtraType.FAST,
    amount: fastAnswers.length,
    total: fastAnswers.length * 50
  }]);
};

export const addSlowExtra = (answers, extras, lives) => {
  if (lives === 0) {
    return extras;
  }
  const slowAnswers = answers.filter((item) => item === AnswerType.SLOW);
  if (slowAnswers.length === 0) {
    return extras;
  }
  return extras.concat([{
    type: ExtraType.SLOW,
    amount: slowAnswers.length,
    total: slowAnswers.length * -50
  }]);
};

export const initStats = (data) => {
  let extras = addLivesExtra([], data.lives);
  extras = addFastExtra(data.answers, extras, data.lives);
  extras = addSlowExtra(data.answers, extras, data.lives);

  const total = calculateScore(data.answers, data.lives);

  const totalWithExtra = calculateTotalScoreWithExtras(total, extras);

  const stats = Object.assign({}, initialStats, {
    status: calculateStatusResult(data.lives),
    answers: data.answers,
    total: total,
    extras: extras,
    totalWithExtra: totalWithExtra
  });
  return stats;
};
