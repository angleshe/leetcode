import assert from 'power-assert';
import { kthSmallest } from '../kthSmallest';
import { TreeNode } from '../../model/TreeNode';

describe('src/kthSmallest', () => {
  describe('kthSmallest', () => {
    it('[3,1,4,null,2], 1', () =>
      assert.strictEqual(kthSmallest(TreeNode.createdNumberTree([3, 1, 4, null, 2]), 1), 1));
    it('[5,3,6,2,4,null,null,1], 3', () =>
      assert.strictEqual(
        kthSmallest(TreeNode.createdNumberTree([5, 3, 6, 2, 4, null, null, 1]), 3),
        3
      ));
  });
});
