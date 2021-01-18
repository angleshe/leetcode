import assert from 'power-assert';
import { lowestCommonAncestor } from '../lowestCommonAncestor';
import { TreeNode } from '../../model/TreeNode';

describe('src/lowestCommonAncestor', () => {
  describe('lowestCommonAncestor', () => {
    it('[6,2,8,0,4,7,9,null,null,3,5], 2, 8', () =>
      assert.strictEqual(
        lowestCommonAncestor(
          TreeNode.createdNumberTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
          TreeNode.createdNumberTree([2]),
          TreeNode.createdNumberTree([8])
        )?.val,
        6
      ));
    it('[6,2,8,0,4,7,9,null,null,3,5], 2, 4', () =>
      assert.strictEqual(
        lowestCommonAncestor(
          TreeNode.createdNumberTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
          TreeNode.createdNumberTree([2]),
          TreeNode.createdNumberTree([4])
        )?.val,
        2
      ));
  });
});
