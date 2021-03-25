import assert from 'power-assert';
import { maxCoins } from '../maxCoins';

describe('src/maxCoins', () => {
  describe('maxCoins', () => {
    it('[3,1,5,8]', () => assert.strictEqual(maxCoins([3, 1, 5, 8]), 167));
    it('[1, 5]', () => assert.strictEqual(maxCoins([1, 5]), 10));
  });
});
