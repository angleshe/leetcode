import assert from 'power-assert';
import { isSymmetric } from '../isSymmetric';
import { TreeNode } from '../../model/TreeNode';

describe('src/isSymmetric', () => {
  describe('isSymmetric', () => {
    it('[1,2,2,3,4,4,3]', () => {
      assert.ok(isSymmetric(TreeNode.createdNumberTree([1, 2, 2, 3, 4, 4, 3])));
    });
    it('[1,2,2,null,3,null,3]', () => {
      assert.ok(!isSymmetric(TreeNode.createdNumberTree([1, 2, 2, null, 3, null, 3])));
    });
    it('[1,0]', () => {
      assert.ok(!isSymmetric(TreeNode.createdNumberTree([1, 0])));
    });
    it('[]', () => {
      assert.ok(isSymmetric(TreeNode.createdNumberTree([])));
    });
  });
});
