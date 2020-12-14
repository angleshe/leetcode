import assert from 'power-assert';
import { findKthLargest } from '../findKthLargest';

describe('src/findKthLargest', () => {
  describe('findKthLargest', () => {
    it('[3,2,1,5,6,4], 2', () => assert.strictEqual(findKthLargest([3, 2, 1, 5, 6, 4], 2), 5));
    it('[3,2,3,1,2,4,5,5,6], 4', () =>
      assert.strictEqual(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4));
  });
});
