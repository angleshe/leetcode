import assert from 'power-assert';
import { largestRectangleArea } from '../largestRectangleArea';

describe('src/largestRectangleArea', () => {
  describe('largestRectangleArea', () => {
    it('[2,1,5,6,2,3]', () => {
      assert.strictEqual(largestRectangleArea([2, 1, 5, 6, 2, 3]), 10);
    });
    it('[5,4,1,2]', () => {
      assert.strictEqual(largestRectangleArea([5, 4, 1, 2]), 8);
    });
    it('[4,2,0,3,2,5]', () => {
      assert.strictEqual(largestRectangleArea([4, 2, 0, 3, 2, 5]), 6);
    });
    it('[0,0,0,0,0,0,0,0,2147483647]', () => {
      assert.strictEqual(largestRectangleArea([0, 0, 0, 0, 0, 0, 0, 0, 2147483647]), 2147483647);
    });
  });
});
