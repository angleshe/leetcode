import assert from 'power-assert';
import { maxDepth } from '../maxDepth';
import { TreeNode } from '../../model/TreeNode';

describe('src/maxDepth', () => {
  describe('maxDepth', () => {
    it('[3,9,20,null,null,15,7]', () => {
      assert.strictEqual(maxDepth(TreeNode.createdNumberTree([3, 9, 20, null, null, 15, 7])), 3);
    });
  });
});
