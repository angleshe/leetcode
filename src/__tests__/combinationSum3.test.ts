import assert from 'power-assert';
import { combinationSum3 } from '../combinationSum3';

describe('src/combinationSum3', () => {
  describe('combinationSum3', () => {
    it('3, 7', () => assert.deepStrictEqual(combinationSum3(3, 7), [[1, 2, 4]]));
    it('3, 9', () =>
      assert.deepStrictEqual(combinationSum3(3, 9), [
        [1, 2, 6],
        [1, 3, 5],
        [2, 3, 4]
      ]));
    it('9, 45', () =>
      assert.deepStrictEqual(combinationSum3(9, 45), [[1, 2, 3, 4, 5, 6, 7, 8, 9]]));
  });
});
