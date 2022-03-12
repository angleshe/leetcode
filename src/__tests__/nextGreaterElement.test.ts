import assert from 'power-assert';
import { nextGreaterElement } from '../nextGreaterElement';

describe('src/nextGreaterElement', () => {
  describe('nextGreaterElement', () => {
    it('[4,1,2], [1,3,4,2]', () =>
      assert.deepStrictEqual(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]), [-1, 3, -1]));
    it('[2,4], [1,2,3,4]', () =>
      assert.deepStrictEqual(nextGreaterElement([2, 4], [1, 2, 3, 4]), [3, -1]));
  });
});
