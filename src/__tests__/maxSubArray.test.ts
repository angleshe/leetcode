import assert from 'power-assert';
import { maxSubArray } from '../maxSubArray';

describe('src/maxSubArray', () => {
  describe('maxSubArray', () => {
    it('[-2,1,-3,4,-1,2,1,-5,4]', () => {
      assert.strictEqual(6, maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
    });
  });
});
