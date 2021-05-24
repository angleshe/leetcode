import assert from 'power-assert';
import { rob } from '../rob3';
import { TreeNode } from '../../model/TreeNode';

describe('src/rob3.ts', () => {
  describe('rob', () => {
    it('[3,2,3,null,3,null,1]', () =>
      assert.strictEqual(rob(TreeNode.createdNumberTree([3, 2, 3, null, 3, null, 1])), 7));
    it('[3,4,5,1,3,null,1]', () =>
      assert.strictEqual(rob(TreeNode.createdNumberTree([3, 4, 5, 1, 3, null, 1])), 9));
  });
});
