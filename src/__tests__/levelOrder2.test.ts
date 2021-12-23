import assert from 'power-assert';
import { Node, levelOrder } from '../levelOrder2';

describe('src/levelOrder2', () => {
  describe('levelOrder', () => {
    it('[1,null,3,2,4,null,5,6]', () =>
      assert.deepStrictEqual(levelOrder(Node.createdNodeOfArray([1, null, 3, 2, 4, null, 5, 6])), [
        [1],
        [3, 2, 4],
        [5, 6]
      ]));
    it('[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]', () =>
      assert.deepStrictEqual(
        levelOrder(
          Node.createdNodeOfArray([
            1,
            null,
            2,
            3,
            4,
            5,
            null,
            null,
            6,
            7,
            null,
            8,
            null,
            9,
            10,
            null,
            null,
            11,
            null,
            12,
            null,
            13,
            null,
            null,
            14
          ])
        ),
        [[1], [2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13], [14]]
      ));
  });
});
