import assert from 'assert';
import {initialGame, setTime, setLives, setLevel, setAnswer} from './game-utils';

describe('SetTime correct', function () {
  it('successfully change time', function () {
    assert.equal(setTime(initialGame, 30).time, 30);
  });
  it('SetTime throws an error if negative value passed', () => {
    assert.throws(() => setTime(initialGame, -1));
  });
});
describe('SetLives correct', function () {
  it('successfully change lives', function () {
    assert.equal(setLives(initialGame, 3).lives, 3);
  });
  it('SetLives throws an error if negative value passed', () => {
    assert.throws(() => setLives(initialGame, -1));
  });
});
describe('SetLevel correct', function () {
  it('successfully change level', function () {
    assert.equal(setLevel(initialGame, 8).level, 8);
  });
  it('throws an error if negative value passed', () => {
    assert.throws(() => setLevel(initialGame, -1));
  });
});
describe('SetAnswer correct', function () {
  it('successfully set answer', function () {
    assert.equal(setAnswer(initialGame, 'wrong').answers[initialGame.level], initialGame.answers[initialGame.level]);
  });
});
