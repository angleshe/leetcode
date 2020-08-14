import assert from 'power-assert';
import { flatten } from '../flatten';
import { TreeNode } from '../../model/TreeNode';

describe('src/flatten', () => {
  describe('flatten', () => {
    it('[1, 2, 5, 3, 4, null, 6]', () => {
      const tree1: TreeNode = TreeNode.createdNumberTree([1, 2, 5, 3, 4, null, 6])!;
      flatten(tree1);
      assert.deepStrictEqual(tree1.toString(), [1, null, 2, null, 3, null, 4, null, 5, null, 6]);
    });
  });
});
