import assert from 'power-assert';
import { findOrder } from '../findOrder';

describe('src/findOrder', () => {
  describe('findOrder', () => {
    it('2, [[1,0]]', () => assert.deepStrictEqual(findOrder(2, [[1, 0]]), [0, 1]));
    it('4, [[1,0],[2,0],[3,1],[3,2]]', () =>
      assert.deepStrictEqual(
        findOrder(4, [
          [1, 0],
          [2, 0],
          [3, 1],
          [3, 2]
        ]),
        [0, 1, 2, 3]
      ));
  });
});
