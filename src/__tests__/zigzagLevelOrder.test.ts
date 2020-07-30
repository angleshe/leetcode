import assert from 'power-assert';
import { zigzagLevelOrder } from '../zigzagLevelOrder';
import { TreeNode } from '../../model/TreeNode';

describe('src/zigzagLevelOrder', () => {
  describe('zigzagLevelOrder', () => {
    it('[3,9,20,null,null,15,7]', () => {
      assert.deepStrictEqual(
        zigzagLevelOrder(TreeNode.createdNumberTree([3, 9, 20, null, null, 15, 7])),
        [[3], [20, 9], [15, 7]]
      );
    });
  });
});
