import assert from 'power-assert';
import { isAdditiveNumber, add } from '../isAdditiveNumber';

describe('src/isAdditiveNumber', () => {
  describe('add', () => {
    it('99, 1', () => assert.strictEqual(add('99', '1'), '100'));
    it('1, 1', () => assert.strictEqual(add('1', '1'), '2'));
    it('8, 8', () => assert.strictEqual(add('8', '8'), '16'));
  });
  describe('isAdditiveNumber', () => {
    it('112358', () => assert.ok(isAdditiveNumber('112358')));
    it('199100199', () => assert.ok(isAdditiveNumber('199100199')));
  });
});
