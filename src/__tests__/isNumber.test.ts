import assert from 'power-assert';
import { charIsNumber, isNumber } from '../isNumber';

describe('src/isNumber', () => {
  describe('charIsNumber', () => {
    it('4', () => {
      assert.ok(charIsNumber('4'));
    });
    it('s', () => {
      assert.ok(!charIsNumber('s'));
    });
  });
  describe('isNumber', () => {
    it('0', () => {
      assert.ok(isNumber('0'));
    });
    it(' 0.1', () => {
      assert.ok(isNumber(' 0.1'));
    });
    it('abc', () => {
      assert.ok(!isNumber('abc'));
    });
    it('1 a', () => {
      assert.ok(!isNumber('1 a'));
    });
    it('2e10', () => {
      assert.ok(isNumber('2e10'));
    });
    it(' -90e3   ', () => {
      assert.ok(isNumber(' -90e3   '));
    });
    it(' 1e', () => {
      assert.ok(!isNumber(' 1e'));
    });
    it('e3', () => {
      assert.ok(!isNumber('e3'));
    });
    it(' 6e-1', () => {
      assert.ok(isNumber(' 6e-1'));
    });
    it(' 99e2.5', () => {
      assert.ok(!isNumber(' 99e2.5'));
    });
    it('53.5e93', () => {
      assert.ok(isNumber('53.5e93'));
    });
    it(' --6 ', () => {
      assert.ok(!isNumber(' --6 '));
    });
    it('-+3', () => {
      assert.ok(!isNumber('-+3'));
    });
    it('95a54e53', () => {
      assert.ok(!isNumber('95a54e53'));
    });
    it(' ', () => {
      assert.ok(!isNumber(' '));
    });
    it('.1', () => {
      assert.ok(isNumber('.1'));
    });
    it('3.', () => {
      assert.ok(isNumber('3.'));
    });
    it('.', () => {
      assert.ok(!isNumber('.'));
    });
    it('+', () => {
      assert.ok(!isNumber('+'));
    });
    it('4e+', () => {
      assert.ok(!isNumber('4e+'));
    });
    it('+.8', () => {
      assert.ok(isNumber('+.8'));
    });
    it('.-', () => {
      assert.ok(!isNumber('.-'));
    });
    it('46.e3', () => {
      assert.ok(isNumber('46.e3'));
    });
    it('.e3', () => {
      assert.ok(!isNumber('.e3'));
    });
  });
});
