import assert from 'power-assert';
import { findPeakElement } from '../findPeakElement';

describe('src/findPeakElement', () => {
  describe('findPeakElement', () => {
    it('[1,2,3,1]', () => assert.strictEqual(findPeakElement([1, 2, 3, 1]), 2));
    it('[1,2,1,3,5,6,4]', () => {
      const res = findPeakElement([1, 2, 1, 3, 5, 6, 4]);
      assert.ok(res === 1 || res === 5);
    });
  });
});
