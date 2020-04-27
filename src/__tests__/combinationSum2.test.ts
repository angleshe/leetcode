import assert from 'power-assert';
import { combinationSum2 } from '../combinationSum2';
import { showContent } from '../utils';

describe('src/combinationSum2', () => {
  describe('combinationSum2()', () => {
    it(`${showContent([10, 1, 2, 7, 6, 1, 5])}, 8`, () => {
      assert.deepStrictEqual(
        [
          [1, 1, 6],
          [1, 2, 5],
          [1, 7],
          [2, 6]
        ],
        combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
      );
    });
    it(`${showContent([2, 5, 2, 1, 2])}, 5`, () => {
      assert.deepStrictEqual([[1, 2, 2], [5]], combinationSum2([2, 5, 2, 1, 2], 5));
    });
  });
});
