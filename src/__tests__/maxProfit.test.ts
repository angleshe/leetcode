import assert from 'power-assert';
import { maxProfit } from '../maxProfit';

describe('src/maxProfit', () => {
  describe('maxProfit', () => {
    // it('[7,1,5,3,6,4]', () => assert.strictEqual(maxProfit([7, 1, 5, 3, 6, 4]), 7));
    // it('[1,2,3,4,5]', () => assert.strictEqual(maxProfit([1, 2, 3, 4, 5]), 4));
    // it('[7,6,4,3,1]', () => assert.strictEqual(maxProfit([7, 6, 4, 3, 1]), 0));
    it('[1,2]', () => assert.strictEqual(maxProfit([1, 2]), 1));
  });
});
