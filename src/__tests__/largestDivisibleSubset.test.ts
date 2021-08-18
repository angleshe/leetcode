import assert from 'power-assert';
import { largestDivisibleSubset } from '../largestDivisibleSubset';

describe('src/largestDivisibleSubset', () => {
  describe('largestDivisibleSubset', () => {
    it('[1,2,3]', () => assert.deepStrictEqual(largestDivisibleSubset([1, 2, 3]), [2, 1]));
    it('[1,2,4,8]', () =>
      assert.deepStrictEqual(largestDivisibleSubset([1, 2, 4, 8]), [8, 4, 2, 1]));
  });
});
