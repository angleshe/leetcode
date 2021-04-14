import assert from 'power-assert';
import { coinChange } from '../coinChange';

describe('src/coinChange', () => {
  describe('coinChange', () => {
    it('[1, 2, 5], 11', () => assert.strictEqual(coinChange([1, 2, 5], 11), 3));
    it('[2], 3', () => assert.strictEqual(coinChange([2], 3), -1));
    it('[1], 0', () => assert.strictEqual(coinChange([1], 0), 0));
    it('[1], 1', () => assert.strictEqual(coinChange([1], 1), 1));
    it('[1], 2', () => assert.strictEqual(coinChange([1], 2), 2));
  });
});
