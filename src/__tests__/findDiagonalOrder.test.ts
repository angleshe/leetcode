import assert from 'power-assert';
import { findDiagonalOrder } from '../findDiagonalOrder';

describe('src/findDiagonalOrder', () => {
  describe('findDiagonalOrder', () => {
    it('[[1,2,3],[4,5,6],[7,8,9]]', () =>
      assert.deepStrictEqual(
        findDiagonalOrder([
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
        ]),
        [1, 2, 4, 7, 5, 3, 6, 8, 9]
      ));
    it('[[1,2],[3,4]]', () =>
      assert.deepStrictEqual(
        findDiagonalOrder([
          [1, 2],
          [3, 4]
        ]),
        [1, 2, 3, 4]
      ));
  });
});
