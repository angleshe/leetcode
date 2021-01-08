import assert from 'power-assert';
import { majorityElement } from '../majorityElement2';

describe('src/majorityElement2', () => {
  describe('majorityElement', () => {
    it('[3,2,3]', () => assert.deepStrictEqual(majorityElement([3, 2, 3]), [3]));
    it('[1]', () => assert.deepStrictEqual(majorityElement([1]), [1]));
    it('[1,1,1,3,3,2,2,2]', () =>
      assert.deepStrictEqual(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]), [1, 2]));
  });
});
