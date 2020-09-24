import assert from 'power-assert';
import { postorderTraversal } from '../postorderTraversal';
import { TreeNode } from '../../model/TreeNode';

describe('src/postorderTraversal', () => {
  describe('postorderTraversal', () => {
    it('[1,null,2,3]', () => {
      assert.deepStrictEqual(postorderTraversal(TreeNode.createdNumberTree([1, null, 2, 3])), [
        3,
        2,
        1
      ]);
    });
  });
});
