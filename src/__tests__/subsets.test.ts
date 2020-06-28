import assert from 'power-assert';
import { subsets } from '../subsets';

describe('src/subsets', () => {
  describe('subsets', () => {
    it('[1,2,3]', () => {
      assert.deepStrictEqual(subsets([1, 2, 3]), [
        [],
        [1],
        [2],
        [3],
        [1, 2],
        [1, 3],
        [2, 3],
        [1, 2, 3]
      ]);
    });
  });
});
