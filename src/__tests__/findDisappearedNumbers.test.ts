import assert from 'power-assert';
import { findDisappearedNumbers } from '../findDisappearedNumbers';

describe('src/findDisappearedNumbers', () => {
  describe('findDisappearedNumber', () => {
    it('[4,3,2,7,8,2,3,1]', () =>
      assert.deepStrictEqual(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]), [5, 6]));
    it('[1,1]', () => assert.deepStrictEqual(findDisappearedNumbers([1, 1]), [2]));
  });
});
