import assert from 'power-assert';
import { pathSum } from '../pathSum2';
import { TreeNode } from '../../model/TreeNode';

describe('src/pathSum2', () => {
  describe('pathSum', () => {
    it('[10,5,-3,3,2,null,11,3,-2,null,1], 8', () =>
      assert.strictEqual(
        pathSum(TreeNode.createdNumberTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8),
        3
      ));
    it('[5,4,8,11,null,13,4,7,2,null,null,5,1], 22', () =>
      assert.strictEqual(
        pathSum(TreeNode.createdNumberTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22),
        3
      ));
  });
});
