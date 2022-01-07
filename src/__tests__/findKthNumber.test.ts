import assert from 'power-assert';
import { findKthNumber, prefixCount } from '../findKthNumber';

describe('src/findKthNumber', () => {
  describe('prefixCount', () => {
    it('1, 13', () => assert.strictEqual(prefixCount(1, 13), 5));
    it('10, 13', () => assert.strictEqual(prefixCount(10, 13), 1));
  });
  describe('findKthNumber', () => {
    it('13, 2', () => assert.strictEqual(findKthNumber(13, 2), 10));
    it('2, 2', () => assert.strictEqual(findKthNumber(2, 2), 2));
  });
});
