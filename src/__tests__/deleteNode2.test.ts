import assert from 'power-assert';
import { deleteNode } from '../deleteNode2';
import { TreeNode } from '../../model/TreeNode';

describe('src/deleteNode2', () => {
  describe('deleteNode', () => {
    it('[5,3,6,2,4,null,7], 3', () =>
      assert.deepStrictEqual(
        deleteNode(TreeNode.createdNumberTree([5, 3, 6, 2, 4, null, 7]), 3)?.toString(),
        [5, 4, 6, 2, null, null, 7]
      ));
    it('[5,3,6,2,4,null,7], 0', () =>
      assert.deepStrictEqual(
        deleteNode(TreeNode.createdNumberTree([5, 3, 6, 2, 4, null, 7]), 0)?.toString(),
        [5, 3, 6, 2, 4, null, 7]
      ));
    it('[], 0', () =>
      assert.deepStrictEqual(deleteNode(TreeNode.createdNumberTree([]), 0)?.toString() ?? [], []));
    it('[0], 0', () =>
      assert.deepStrictEqual(deleteNode(TreeNode.createdNumberTree([0]), 0)?.toString() ?? [], []));
  });
});
