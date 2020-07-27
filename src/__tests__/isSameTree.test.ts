import assert from 'power-assert';
import { isSameTree } from '../isSameTree';
import { TreeNode } from '../../model/TreeNode';

describe('src/isSameTree', () => {
  describe('isSameTree', () => {
    it('[1,2,3], [1,2,3]', () => {
      assert.ok(
        isSameTree(TreeNode.createdNumberTree([1, 2, 3]), TreeNode.createdNumberTree([1, 2, 3]))
      );
    });
    it('[1,2], [1,null,2]', () => {
      assert.ok(
        !isSameTree(TreeNode.createdNumberTree([1, 2]), TreeNode.createdNumberTree([1, null, 2]))
      );
    });
    it('[1,2,1], [1,1,2]', () => {
      assert.ok(
        !isSameTree(TreeNode.createdNumberTree([1, 2, 1]), TreeNode.createdNumberTree([1, 1, 2]))
      );
    });
  });
});
