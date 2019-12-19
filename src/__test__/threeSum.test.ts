import { showContent } from './units';
import assert from 'assert';
import { threeSum } from '../threeSum';
describe('src/threeSum', () => {
  describe('threeSum', () => {
    it(showContent([-1, 0, 1, 2, -1, -4]), () => {
      assert.deepStrictEqual(
        [
          [-1, -1, 2],
          [-1, 0, 1]
        ],
        threeSum([-1, 0, 1, 2, -1, -4])
      );
    });
  });
});
