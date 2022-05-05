import assert from 'power-assert';
import { findBottomLeftValue } from '../findBottomLeftValue';
import { TreeNode } from '../../model/TreeNode';

describe('src/findBottomLeftValue', () => {
  describe('findBottomLeftValue', () => {
    it('[2, 1, 3]', () =>
      assert.strictEqual(findBottomLeftValue(TreeNode.createdNumberTree([2, 1, 3])), 1));
    it('[1,2,3,4,null,5,6,null,null,7]', () =>
      assert.strictEqual(
        findBottomLeftValue(TreeNode.createdNumberTree([1, 2, 3, 4, null, 5, 6, null, null, 7])),
        7
      ));
  });
});
