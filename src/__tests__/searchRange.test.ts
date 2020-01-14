import { searchRange } from '../searchRange';
import { showContent } from '../utils';
import assert from 'power-assert';
describe('src/searchRange', () => {
  describe('searchRnge', () => {
    it(`${showContent([5, 7, 7, 8, 8, 10])}, 8`, () => {
      assert.deepStrictEqual([3, 4], searchRange([5, 7, 7, 8, 8, 10], 8));
    });
    it(`${showContent([5, 7, 7, 8, 8, 10])}, 6`, () => {
      assert.deepStrictEqual([-1, -1], searchRange([5, 7, 7, 8, 8, 10], 6));
    });
    it(`${showContent([1, 4])}, 4`, () => {
      assert.deepStrictEqual([1, 1], searchRange([1, 4], 4));
    });
    it(`${showContent([1, 2, 2])}, 4`, () => {
      assert.deepStrictEqual([1, 2], searchRange([1, 2, 2], 2));
    });
  });
});
