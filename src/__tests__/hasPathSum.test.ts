import assert from 'power-assert';
import { hasPathSum } from '../hasPathSum';
import { TreeNode } from '../../model/TreeNode';

describe('src/hasPathSum', () => {
  describe('hasPathSum', () => {
    it('[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22', () => {
      assert.ok(
        hasPathSum(
          TreeNode.createdNumberTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]),
          22
        )
      );
    });
    it('[], 0', () => {
      assert.ok(!hasPathSum(TreeNode.createdNumberTree([]), 0));
    });
    it('[1,2], 1', () => {
      assert.ok(!hasPathSum(TreeNode.createdNumberTree([1, 2]), 1));
    });
  });
});
