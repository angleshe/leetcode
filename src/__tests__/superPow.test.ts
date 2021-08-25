import assert from 'power-assert';
import { superPow } from '../superPow';

describe('src/superPow', () => {
  describe('superPow', () => {
    it('2, [3]', () => assert.strictEqual(superPow(2, [3]), 8));
    it('2, [1, 0]', () => assert.strictEqual(superPow(2, [1, 0]), 1024));
    it('2147483647, [2, 0, 0]', () => assert.strictEqual(superPow(2147483647, [2, 0, 0]), 1198));
  });
});
