import assert from 'power-assert';
import { preorderTraversal } from '../preorderTraversal';
import { TreeNode } from '../../model/TreeNode';

describe('src/preorderTraversal', () => {
  describe('preorderTraversal', () => {
    it('[1,null,2,3]', () =>
      assert.deepStrictEqual(preorderTraversal(TreeNode.createdNumberTree([1, null, 2, 3])), [
        1,
        2,
        3
      ]));
  });
});
