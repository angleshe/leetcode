import assert from 'power-assert';
import { binaryTreePaths } from '../binaryTreePaths';
import { TreeNode } from '../../model/TreeNode';

describe('src/binaryTreePaths', () => {
  describe('binaryTreePaths', () => {
    it('[1, 2, 3, null, 5]', () =>
      assert.deepStrictEqual(binaryTreePaths(TreeNode.createdNumberTree([1, 2, 3, null, 5])), [
        '1->2->5',
        '1->3'
      ]));
  });
});
