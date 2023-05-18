import { maxProfit } from '../maxProfit5';
import assert from 'power-assert';

describe('src/maxProfit5', () => {
  describe('maxProfit', () => {
    it('[7,1,5,3,6,4]', () => assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5));
    it('[7,6,4,3,1]', () => assert.equal(maxProfit([7, 6, 4, 3, 1]), 0));
  });
});
