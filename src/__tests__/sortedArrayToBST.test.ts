import assert from 'power-assert';
import { sortedArrayToBST } from '../sortedArrayToBST';

describe('src/sortedArrayToBST', () => {
  describe('sortedArrayToBST', () => {
    it('[-10,-3,0,5,9]', () => {
      assert.deepStrictEqual(sortedArrayToBST([-10, -3, 0, 5, 9])?.toString(), [
        0,
        -3,
        9,
        -10,
        null,
        5
      ]);
    });
  });
});
