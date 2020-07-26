import assert from 'power-assert';
import { recoverTree } from '../recoverTree';
import { TreeNode } from '../../model/TreeNode';

describe('src/recoverTree', () => {
  describe('recoverTree', () => {
    const test1: TreeNode = TreeNode.createdNumberTree([1, 3, null, null, 2])!;
    const test2: TreeNode = TreeNode.createdNumberTree([3, 1, 4, null, null, 2])!;
    it(test1.toString().toString(), () => {
      recoverTree(test1);
      assert.deepStrictEqual(test1.toString(), [3, 1, null, null, 2]);
    });
    it(test2.toString().toString(), () => {
      recoverTree(test2);
      assert.deepStrictEqual(test2.toString(), [2, 1, 4, null, null, 3]);
    });
  });
});
