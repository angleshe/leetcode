import assert from 'power-assert';
import { findFrequentTreeSum } from '../findFrequentTreeSum';
import { TreeNode } from '../../model/TreeNode';

describe('src/findFrequentTreeSum', () => {
  describe('findFrequentTreeSum', () => {
    it('[5,2,-3]', () =>
      assert.deepStrictEqual(findFrequentTreeSum(TreeNode.createdNumberTree([5, 2, -3])), [
        2,
        -3,
        4
      ]));
    it('[5,2,-5]', () =>
      assert.deepStrictEqual(findFrequentTreeSum(TreeNode.createdNumberTree([5, 2, -5])), [2]));
  });
});
