import {AnswerType} from './game-data';

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
  title: '',
  type: ExtraType.LIVES,
  amount: 0,
  total: 0
};

export const calculateStatusResult = (lives) => {
  return lives > 0 ? GameResultStatusType.WIN : GameResultStatusType.FAIL;
};

export const calculateTotal = (answers, lives) => {
  if (lives === 0) {
    return 0;
  }
  const correctAnswers = answers.filter((item) => item === AnswerType.CORRECT || item === AnswerType.FAST || item === AnswerType.SLOW);
  return correctAnswers.length * 100;
};

export const calculateTotalWithExtras = (total, extras) => {
  return extras.reduce(function (prev, curr) {
    return prev + curr.total;
  }, total);
};

export const addLivesExtra = (answers, extras, lives) =>{
  let result = extras.slice(0);
  if (lives === 0) {
    return result;
  }
  result.push({
    title: extraTitle.get(ExtraType.LIVES),
    type: ExtraType.LIVES,
    amount: lives,
    total: lives * 50
  });
  return result;
};

export const addFastExtra = (answers, extras, lives) => {
  let result = extras.slice(0);
  if (lives === 0) {
    return result;
  }
  const fastAnswers = answers.filter((item) => item === AnswerType.FAST);
  if (fastAnswers.length === 0) {
    return result;
  }
  result.push({
    title: extraTitle.get(ExtraType.FAST),
    type: ExtraType.FAST,
    amount: fastAnswers.length,
    total: fastAnswers.length * 50
  });
  return result;
};

export const addSlowExtra = (answers, extras, lives) => {
  let result = extras.slice(0);
  if (lives === 0) {
    return result;
  }
  const slowAnswers = answers.filter((item) => item === AnswerType.SLOW);
  if (slowAnswers.length === 0) {
    return result;
  }
  result.push({
    title: extraTitle.get(ExtraType.SLOW),
    type: ExtraType.SLOW,
    amount: slowAnswers.length,
    total: slowAnswers.length * -50
  });
  return result;
};

export const initStats = (data) => {
  let stats = Object.assign({}, initialStats, {
    status: calculateStatusResult(data.lives),
    answers: data.answers,
    total: calculateTotal(data.answers, data.lives)
  });
  stats = Object.assign({}, stats, {
    extras: addLivesExtra(stats.answers, stats.extras, data.lives)
  });
  stats = Object.assign({}, stats, {
    extras: addFastExtra(stats.answers, stats.extras, data.lives)
  });
  stats = Object.assign({}, stats, {
    extras: addSlowExtra(stats.answers, stats.extras, data.lives)
  });
  stats = Object.assign({}, stats, {
    totalWithExtra: calculateTotalWithExtras(stats.total, stats.extras)
  });
  return stats;
};
