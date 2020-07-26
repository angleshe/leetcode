import assert from 'power-assert';
import { isValidBST } from '../isValidBST';
import { TreeNode } from '../../model/TreeNode';

describe('src/isValidBST', () => {
  describe('isValidBST', () => {
    it('[2, 1, 3]', () => {
      assert.ok(isValidBST(TreeNode.createdNumberTree([2, 1, 3])));
    });
    it('[5,1,4,null,null,3,6]', () => {
      assert.ok(!isValidBST(TreeNode.createdNumberTree([5, 1, 4, null, null, 3, 6])));
    });
    it('[]', () => {
      assert.ok(isValidBST(TreeNode.createdNumberTree([])));
    });
    it('[10,5,15,null,null,6,20]', () => {
      assert.ok(!isValidBST(TreeNode.createdNumberTree([10, 5, 15, null, null, 6, 20])));
    });
    it('[1, 1]', () => {
      assert.ok(!isValidBST(TreeNode.createdNumberTree([1, 1])));
    });
  });
});
