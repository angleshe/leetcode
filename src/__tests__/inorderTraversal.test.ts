import assert from 'power-assert';
import { inorderTraversal } from '../inorderTraversal';
import { TreeNode } from '../../model/TreeNode';

describe('src/inorderTraversal', () => {
  describe('inorderTraversal', () => {
    const test1: Array<number | null> = [1, null, 2, 3];
    it('[1, null, 2, 3]', () => {
      assert.deepStrictEqual(inorderTraversal(TreeNode.createdNumberTree(test1)), [1, 3, 2]);
    });
  });
});
