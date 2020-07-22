import assert from 'power-assert';
import { generateTrees } from '../generateTrees';

describe('src/generateTrees', () => {
  describe('generateTrees', () => {
    it('3', () => {
      assert.deepStrictEqual(
        generateTrees(3).map((item) => item?.toString()),
        [
          [1, null, 2, null, 3],
          [1, null, 3, 2],
          [2, 1, 3],
          [3, 1, null, null, 2],
          [3, 2, null, 1]
        ]
      );
    });
  });
});
