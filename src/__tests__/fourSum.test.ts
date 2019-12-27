import { showContent } from '../utils';
import assert from 'assert';
import { fourSum } from '../fourSum';
describe('src/fourSum', () => {
  describe('fourSum', () => {
    it(`${showContent([1, 0, -1, 0, -2, 2])}, 0`, () => {
      assert.deepStrictEqual(
        [
          [-2, -1, 1, 2],
          [-2, 0, 0, 2],
          [-1, 0, 0, 1]
        ],
        fourSum([1, 0, -1, 0, -2, 2], 0)
      );
    });
    it(`${showContent([-1, 0, 1, 2, -1, -4])}, -1`, () => {
      assert.deepStrictEqual(
        [
          [-4, 0, 1, 2],
          [-1, -1, 0, 1]
        ],
        fourSum([-1, 0, 1, 2, -1, -4], -1)
      );
    });
    it(`${showContent([-3, -2, -1, 0, 0, 1, 2, 3])}, 0`, () => {
      assert.deepStrictEqual(
        [
          [-3, -2, 2, 3],
          [-3, -1, 1, 3],
          [-3, 0, 0, 3],
          [-3, 0, 1, 2],
          [-2, -1, 0, 3],
          [-2, -1, 1, 2],
          [-2, 0, 0, 2],
          [-1, 0, 0, 1]
        ],
        fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0)
      );
    });
  });
});
