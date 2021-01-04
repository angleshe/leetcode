import assert from 'power-assert';
import { invertTree } from '../invertTree';
import { TreeNode } from '../../model/TreeNode';

describe('src/invertTree', () => {
  describe('invertTree', () => {
    it('[4, 2, 7, 1, 3, 6, 9]', () =>
      assert.deepStrictEqual(
        invertTree(TreeNode.createdNumberTree([4, 2, 7, 1, 3, 6, 9]))?.toString(),
        [4, 7, 2, 9, 6, 3, 1]
      ));
  });
});
