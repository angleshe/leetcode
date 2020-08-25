import assert from 'power-assert';
import { maxPathSum } from '../maxPathSum';
import { TreeNode } from '../../model/TreeNode';

describe('src/maxPathSum', () => {
  describe('maxPathSum', () => {
    it('[1,2,3]', () => {
      assert.strictEqual(maxPathSum(TreeNode.createdNumberTree([1, 2, 3])), 6);
    });
    it('[-10,9,20,null,null,15,7]', () => {
      assert.strictEqual(
        maxPathSum(TreeNode.createdNumberTree([-10, 9, 20, null, null, 15, 7])),
        42
      );
    });
  });
});
