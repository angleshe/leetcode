import assert from 'power-assert';
import { findDuplicates } from '../findDuplicates';

describe('src/findDuplicates', () => {
  describe('findDuplicates', () => {
    it('[4,3,2,7,8,2,3,1]', () =>
      assert.deepStrictEqual(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]), [3, 2]));
    it('[1,1,2]', () => assert.deepStrictEqual(findDuplicates([1, 1, 2]), [1]));
    it('[1]', () => assert.deepStrictEqual(findDuplicates([1]), []));
  });
});
