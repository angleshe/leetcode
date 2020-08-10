import assert from 'power-assert';
import { isBalanced } from '../isBalanced';
import { TreeNode } from '../../model/TreeNode';

describe('src/isBalanced', () => {
  describe('isBalanced', () => {
    it('[3,9,20,null,null,15,7]', () => {
      assert.ok(isBalanced(TreeNode.createdNumberTree([3, 9, 20, null, null, 15, 7])));
    });
    it('[1,2,2,3,3,null,null,4,4]', () => {
      assert.ok(!isBalanced(TreeNode.createdNumberTree([1, 2, 2, 3, 3, null, null, 4, 4])));
    });
  });
});
