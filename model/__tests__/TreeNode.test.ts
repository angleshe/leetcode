import assert from 'power-assert';
import { TreeNode } from '../TreeNode';

describe('model/TreeNode', () => {
  describe('TreeNode', () => {
    it('[1,null,3,2]', () => {
      assert.deepStrictEqual(TreeNode.createdNumberTree([1, null, 3, 2])!.toString(), [
        1,
        null,
        3,
        2
      ]);
    });
    it('[3,2,null,1]', () => {
      assert.deepStrictEqual(TreeNode.createdNumberTree([3, 2, null, 1])!.toString(), [
        3,
        2,
        null,
        1
      ]);
    });
    it('[3,1,null,null,2]', () => {
      assert.deepStrictEqual(TreeNode.createdNumberTree([3, 1, null, null, 2])!.toString(), [
        3,
        1,
        null,
        null,
        2
      ]);
    });
    it('[3,1,4,null,null,2]', () => {
      assert.deepStrictEqual(TreeNode.createdNumberTree([3, 1, 4, null, null, 2])!.toString(), [
        3,
        1,
        4,
        null,
        null,
        2
      ]);
    });
  });
});
