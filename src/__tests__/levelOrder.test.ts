import assert from 'power-assert';
import { levelOrder } from '../levelOrder';
import { TreeNode } from '../../model/TreeNode';

describe('src/levelOrder', () => {
  describe('levelOrder', () => {
    it('[3,9,20,null,null,15,7]', () => {
      assert.deepStrictEqual(
        levelOrder(TreeNode.createdNumberTree([3, 9, 20, null, null, 15, 7])),
        [[3], [9, 20], [15, 7]]
      );
    });
  });
});
