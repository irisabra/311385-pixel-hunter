import assert from 'assert';
import {AnswerType} from './game-data';
import {GameResultStatusType, ExtraType, calculateStatusResult, calculateTotal, calculateTotalWithExtras} from './stats-utils';

const answers = Array.from(new Array(10), () => AnswerType.CORRECT);
const extras = [
  {
    title: '',
    type: ExtraType.LIVES,
    amount: 1,
    total: 50
  }, {
    title: '',
    type: ExtraType.SLOW,
    amount: 2,
    total: -100
  }];


describe('calculateStatusResult correct', function () {
  it('successfully calculate status if has lives', function () {
    assert.equal(calculateStatusResult(2), GameResultStatusType.WIN);
  });
  it('successfully calculate status if has not lives', () => {
    assert.equal(calculateStatusResult(0), GameResultStatusType.FAIL);
  });
});

describe('calculateTotal correct', function () {
  it('successfully calculate if has lives', function () {
    assert.equal(calculateTotal(answers, 3), 1000);
  });
  it('successfully calculate if has not lives', () => {
    assert.equal(calculateTotal(answers, 0), 0);
  });
});

describe('calculateTotalWithExtras correct', function () {
  it('successfully calculate if has extras', function () {
    assert.equal(calculateTotalWithExtras(1000, extras), 950);
  });
  it('successfully calculate if has not extras', () => {
    assert.equal(calculateTotalWithExtras(1000, []), 1000);
  });
});
