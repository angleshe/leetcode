import assert from 'power-assert';
import { findMode } from '../findMode';
import { TreeNode } from '../../model/TreeNode';

describe('src/findMode', () => {
  describe('findMode', () => {
    it('[1,null,2,2]', () =>
      assert.deepStrictEqual(findMode(TreeNode.createdNumberTree([1, null, 2, 2])), [2]));
    it('[0]', () => assert.deepStrictEqual(findMode(TreeNode.createdNumberTree([0])), [0]));
    it('[1,0,1,0,0,1,1,0]', () =>
      assert.deepStrictEqual(findMode(TreeNode.createdNumberTree([1, 0, 1, 0, 0, 1, 1, 0])), [
        0,
        1
      ]));
  });
});
