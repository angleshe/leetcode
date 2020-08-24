import assert from 'power-assert';
import { maxProfit } from '../maxProfit2';

describe('src/maxProfit2', () => {
  describe('maxProfit', () => {
    it('[3,3,5,0,0,3,1,4]', () => {
      assert.strictEqual(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]), 6);
    });
    it('[1,2,3,4,5]', () => {
      assert.strictEqual(maxProfit([1, 2, 3, 4, 5]), 4);
    });
    it('[7,6,4,3,1]', () => {
      assert.strictEqual(maxProfit([7, 6, 4, 3, 1]), 0);
    });
    it('[7,6,4,3,1]', () => {
      assert.strictEqual(maxProfit([7, 6, 4, 3, 1]), 0);
    });
    it('[1,2,4,2,5,7,2,4,9,0]', () => {
      assert.strictEqual(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0]), 13);
    });
  });
});
