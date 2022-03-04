import assert from 'power-assert';
import { findSubsequences } from '../findSubsequences';

describe('src/findSubsequences', () => {
  describe('findSubsequences', () => {
    it('[4,6,7,7]', () =>
      assert.deepStrictEqual(findSubsequences([4, 6, 7, 7]), [
        [4, 6],
        [4, 6, 7],
        [4, 6, 7, 7],
        [4, 7],
        [4, 7, 7],
        [6, 7],
        [6, 7, 7],
        [7, 7]
      ]));
    it('[4,4,3,2,1]', () => assert.deepStrictEqual(findSubsequences([4, 4, 3, 2, 1]), [[4, 4]]));
  });
});
