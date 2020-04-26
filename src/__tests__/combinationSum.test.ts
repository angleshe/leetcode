import assert from 'power-assert';
import { combinationSum } from '../combinationSum';
import { showContent } from '../utils';

describe('src/combinationSum', () => {
  describe('combinationSum()', () => {
    it(`${showContent([2, 3, 6, 7])}, 7`, () => {
      assert.deepStrictEqual([[2, 2, 3], [7]], combinationSum([2, 3, 6, 7], 7));
    });
    it(`${showContent([2, 3, 5])}, 8`, () => {
      assert.deepStrictEqual(
        [
          [2, 2, 2, 2],
          [2, 3, 3],
          [3, 5]
        ],
        combinationSum([2, 3, 5], 8)
      );
    });
  });
});
