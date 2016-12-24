import assert from 'assert';
import {initialGame, setTime, setLives, setLevel, setAnswer, isGameOver, initGame} from './game-utils';

describe('Game utils', () => {
  describe('setTime', () => {
    it('should set time', () => {
      assert.equal(setTime(initialGame, 30).time, 30);
    });
    it('should throws an error if negative value passed', () => {
      assert.throws(() => setTime(initialGame, -1));
    });
    it('should throws an error if `100` passed', () => {
      assert.throws(() => setTime(initialGame, 100));
    });
  });
  describe('setLives', () => {
    it('should set lives', () => {
      assert.equal(setLives(initialGame, 3).lives, 3);
    });
    it('should throws an error if negative value passed', () => {
      assert.throws(() => setLives(initialGame, -1));
    });
    it('should throws an error if `4` passed', () => {
      assert.throws(() => setLives(initialGame, 4));
    });
  });
  describe('setLevel', () => {
    it('should set level', () => {
      const game = Object.assign({}, initialGame, {questions: new Array(10)});
      assert.equal(setLevel(game, 8).level, 8);
    });
    it('should throws an error if negative value passed', () => {
      assert.throws(() => setLevel(initialGame, -1));
    });
    it('should throws an error if passed more then number of questions', () => {
      assert.throws(() => setLevel(initialGame, initialGame.questions.length + 1));
    });
  });
  describe('setAnswer', () => {
    it('should set answer', () => {
      assert.equal(setAnswer(initialGame, 'wrong').answers[initialGame.level], initialGame.answers[initialGame.level]);
    });
  });
  describe('isGameOver', () => {
    it('should return `false` if lives is `3`', () => {
      assert.equal(isGameOver(initialGame), false);
    });
    it('should return `true` if lives is `0`', () => {
      const game = Object.assign({}, initialGame, {lives: 0});
      assert.equal(isGameOver(game), true);
    });
  });
  describe('initGame', () => {
    it('should set game correctly', () => {
      assert.deepEqual(initGame(initialGame), initialGame);
    });
    it('should not change original game if copy changed', () => {
      let copy = initGame(initialGame);
      copy.lives = 0;
      assert.notDeepEqual(copy, initialGame);
    });
  });

});
