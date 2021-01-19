import assert from 'power-assert';
import { lowestCommonAncestor } from '../lowestCommonAncestor2';
import { TreeNode } from '../../model/TreeNode';

describe('src/lowestCommonAncestor2', () => {
  describe('lowestCommonAncestor', () => {
    it('[3,5,1,6,2,0,8,null,null,7,4], 5, 1', () =>
      assert.strictEqual(
        lowestCommonAncestor(
          TreeNode.createdNumberTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]),
          TreeNode.createdNumberTree([5]),
          TreeNode.createdNumberTree([1])
        )?.val,
        3
      ));
    it('[3,5,1,6,2,0,8,null,null,7,4], 5, 4', () =>
      assert.strictEqual(
        lowestCommonAncestor(
          TreeNode.createdNumberTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]),
          TreeNode.createdNumberTree([5]),
          TreeNode.createdNumberTree([4])
        )?.val,
        5
      ));
  });
});
