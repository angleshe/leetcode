import assert from 'power-assert';
import { subsetsWithDup } from '../subsetsWithDup';

describe('src/subsetsWithDup', () => {
  describe('subsetsWithDup', () => {
    it('[1,2,2]', () => {
      assert.deepStrictEqual(subsetsWithDup([1, 2, 2]), [[], [1], [2], [1, 2], [2, 2], [1, 2, 2]]);
    });
  });
});
