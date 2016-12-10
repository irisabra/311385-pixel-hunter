import assert from 'assert';
import {AnswerType} from './game-data';
import {initialGame} from './game-utils';
import {GameResultStatusType, ExtraType, calculateStatusResult, calculateScore, calculateTotalScoreWithExtras, addLivesExtra, addFastExtra, addSlowExtra, initStats} from './stats-utils';

const answers = Array.from(new Array(10), () => AnswerType.CORRECT);
const fastAnswers = Array.from(new Array(10), () => AnswerType.FAST);
const slowAnswers = Array.from(new Array(10), () => AnswerType.SLOW);

const extras = [
  {
    type: ExtraType.LIVES,
    amount: 1,
    total: 50
  }, {
    type: ExtraType.SLOW,
    amount: 2,
    total: -100
  }];

describe('Stats utils', () => {
  describe('calculateStatusResult', () => {
    it('should return `WIN` when lives is `2`', () => {
      assert.equal(calculateStatusResult(2), GameResultStatusType.WIN);
    });
    it('should return `FAIL` when lives is `0`', () => {
      assert.equal(calculateStatusResult(0), GameResultStatusType.FAIL);
    });
  });

  describe('calculateScore', () => {
    it('should calculate total when lives `3`', () => {
      assert.equal(calculateScore(answers, 3), 1000);
    });
    it('should return `0` when lives `0`', () => {
      assert.equal(calculateScore(answers, 0), 0);
    });
  });

  describe('calculateTotalWithExtras', () => {
    it('should calculate total with extra if extras is not empty', () => {
      assert.equal(calculateTotalScoreWithExtras(1000, extras), 950);
    });
    it('should calculate total with extra if extras is empty', () => {
      assert.equal(calculateTotalScoreWithExtras(1000, []), 1000);
    });
  });

  describe('addLivesExtra', () => {
    it('should add extra if lives is `2`', () => {
      assert.equal(addLivesExtra([], 2).length, 1);
    });
    it('should not add extra if lives is `0`', () => {
      assert.equal(addLivesExtra([], 0).length, 0);
    });
  });

  describe('addFastExtra', () => {
    it('should add extra if lives is not `0` and answers contains fast answers', () => {
      assert.equal(addFastExtra(fastAnswers, [], 2).length, 1);
    });
    it('should not add extra if lives is not `0` and answers not contains fast answers', () => {
      assert.equal(addFastExtra(answers, [], 2).length, 0);
    });
    it('should not add extra if lives is `0`', () => {
      assert.equal(addFastExtra(answers, [], 0).length, 0);
    });
  });

  describe('addSlowExtra', () => {
    it('should add extra if lives is not `0` and answers contains slow answers', () => {
      assert.equal(addSlowExtra(slowAnswers, [], 2).length, 1);
    });
    it('should not add extra if lives is not `0` and answers not contains fast answers', () => {
      assert.equal(addSlowExtra(answers, [], 2).length, 0);
    });
    it('should not add extra if lives is `0`', () => {
      assert.equal(addSlowExtra(answers, [], 0).length, 0);
    });
  });

  describe('initStats', () => {
    it('should set answers', () => {
      assert.equal(initStats(initialGame).answers, initialGame.answers);
    });
    it('should set calculated score', () => {
      assert.equal(initStats(initialGame).total, calculateScore(initialGame.answers, initialGame.lives));
    });
    it('should set status result', () => {
      assert.equal(initStats(initialGame).status, calculateStatusResult(initialGame.lives));
    });
  });
});
