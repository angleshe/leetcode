import assert from 'power-assert';
import { maxProfit } from '../maxProfit3';

describe('src/maxProfit3', () => {
  describe('maxProfit', () => {
    it('2, [2,4,1]', () => assert.strictEqual(maxProfit(2, [2, 4, 1]), 2));
    it('2, [3,2,6,5,0,3]', () => assert.strictEqual(maxProfit(2, [3, 2, 6, 5, 0, 3]), 7));
  });
});
