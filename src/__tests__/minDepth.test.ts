import assert from 'power-assert';
import { minDepth } from '../minDepth';
import { TreeNode } from '../../model/TreeNode';

describe('src/minDepth', () => {
  describe('minDepth', () => {
    it('[3,9,20,null,null,15,7]', () => {
      assert.strictEqual(minDepth(TreeNode.createdNumberTree([3, 9, 20, null, null, 15, 7])), 2);
    });
    it('[1,2]', () => {
      assert.strictEqual(minDepth(TreeNode.createdNumberTree([1, 2])), 2);
    });
  });
});
