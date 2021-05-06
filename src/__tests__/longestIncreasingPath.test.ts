import assert from 'power-assert';
import { longestIncreasingPath } from '../longestIncreasingPath';

describe('src/longestIncreasingPath', () => {
  describe('longestIncreasingPath', () => {
    it('[[9,9,4],[6,6,8],[2,1,1]]', () =>
      assert.strictEqual(
        longestIncreasingPath([
          [9, 9, 4],
          [6, 6, 8],
          [2, 1, 1]
        ]),
        4
      ));
    it('[[3,4,5],[3,2,6],[2,2,1]]', () =>
      assert.strictEqual(
        longestIncreasingPath([
          [3, 4, 5],
          [3, 2, 6],
          [2, 2, 1]
        ]),
        4
      ));
    it('[[1]]', () => assert.strictEqual(longestIncreasingPath([[1]]), 1));
  });
});
