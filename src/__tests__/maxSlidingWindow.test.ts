import assert from 'power-assert';
import { maxSlidingWindow } from '../maxSlidingWindow';

describe('src/maxSlidingWindow', () => {
  describe('maxSlidingWindow', () => {
    it('[1,3,-1,-3,5,3,6,7], 3', () =>
      assert.deepStrictEqual(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7]));
    it('[1], 1', () => assert.deepStrictEqual(maxSlidingWindow([1], 1), [1]));
    it('[1,-1], 1', () => assert.deepStrictEqual(maxSlidingWindow([1, -1], 1), [1, -1]));
    it('[4,-2], 2', () => assert.deepStrictEqual(maxSlidingWindow([4, -2], 2), [4]));
  });
});
