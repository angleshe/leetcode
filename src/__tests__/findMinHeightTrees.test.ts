import assert from 'power-assert';
import { findMinHeightTrees } from '../findMinHeightTrees';

describe('src/findMinHeightTrees', () => {
  describe('findMinHeightTrees', () => {
    it('4, [[1,0],[1,2],[1,3]]', () => {
      assert.deepEqual(
        findMinHeightTrees(4, [
          [1, 0],
          [1, 2],
          [1, 3]
        ]),
        [1]
      );
    });
    it('6, [[3,0],[3,1],[3,2],[3,4],[5,4]]', () => {
      assert.deepEqual(
        findMinHeightTrees(6, [
          [3, 0],
          [3, 1],
          [3, 2],
          [3, 4],
          [5, 4]
        ]),
        [3, 4]
      );
    });
  });
});
