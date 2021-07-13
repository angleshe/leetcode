import assert from 'power-assert';
import { maxSumSubmatrix } from '../maxSumSubmatrix';

describe('src/maxSumSubmatrix', () => {
  describe('maxSumSubmatrix', () => {
    it('[[1,0,1],[0,-2,3]], 2', () =>
      assert.strictEqual(
        maxSumSubmatrix(
          [
            [1, 0, 1],
            [0, -2, 3]
          ],
          2
        ),
        2
      ));
    it('[[2,2,-1]], 3', () => assert.strictEqual(maxSumSubmatrix([[2, 2, -1]], 3), 3));
  });
});
