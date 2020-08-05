import assert from 'power-assert';
import { levelOrderBottom } from '../levelOrderBottom';
import { TreeNode } from '../../model/TreeNode';

describe('src/levelOrderBottom', () => {
  describe('levelOrderBottom', () => {
    it('[3,9,20,null,null,15,7]', () => {
      assert.deepStrictEqual(
        levelOrderBottom(TreeNode.createdNumberTree([3, 9, 20, null, null, 15, 7])),
        [[15, 7], [9, 20], [3]]
      );
    });
  });
});
