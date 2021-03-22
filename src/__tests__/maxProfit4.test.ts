import assert from 'power-assert';
import { maxProfit } from '../maxProfit4';

describe('src/maxProfit4', () => {
  describe('maxProfit', () => {
    it('[1,2,3,0,2]', () => assert.strictEqual(maxProfit([1, 2, 3, 0, 2]), 3));
    it('[1,2,4]', () => assert.strictEqual(maxProfit([1, 2, 4]), 3));
  });
});
