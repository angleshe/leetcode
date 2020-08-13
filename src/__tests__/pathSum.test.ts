import assert from 'power-assert';
import { pathSum } from '../pathSum';
import { TreeNode } from '../../model/TreeNode';

describe('src/pathSum', () => {
  describe('pathSum', () => {
    it('[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 22', () => {
      assert.deepStrictEqual(
        pathSum(TreeNode.createdNumberTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22),
        [
          [5, 4, 11, 2],
          [5, 8, 4, 5]
        ]
      );
    });
  });
});
