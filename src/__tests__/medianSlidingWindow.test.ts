import assert from 'power-assert';
import { medianSlidingWindow } from '../medianSlidingWindow';

describe('src/medianSlidingWindow', () => {
  describe('medianSlidingWindow', () => {
    it('[1,3,-1,-3,5,3,6,7], 3', () =>
      assert.deepStrictEqual(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3), [
        1,
        -1,
        -1,
        3,
        5,
        6
      ]));
    it('[5,2,2,7,3,7,9,0,2,3], 9', () =>
      assert.deepStrictEqual(medianSlidingWindow([5, 2, 2, 7, 3, 7, 9, 0, 2, 3], 9), [3, 3]));
    it('[9,7,0,3,9,8,6,5,7,6], 2', () =>
      assert.deepStrictEqual(medianSlidingWindow([9, 7, 0, 3, 9, 8, 6, 5, 7, 6], 2), [
        8.0,
        3.5,
        1.5,
        6.0,
        8.5,
        7.0,
        5.5,
        6.0,
        6.5
      ]));
  });
});
