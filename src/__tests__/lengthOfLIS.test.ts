import assert from 'power-assert';
import { lengthOfLIS } from '../lengthOfLIS';

describe('src/lengthOfLIS', () => {
  describe('lengthOfLIS', () => {
    it('[10,9,2,5,3,7,101,18]', () =>
      assert.strictEqual(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]), 4));
    it('[0,1,0,3,2,3]', () => assert.strictEqual(lengthOfLIS([0, 1, 0, 3, 2, 3]), 4));
    it('[7,7,7,7,7,7,7]', () => assert.strictEqual(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]), 1));
  });
});
