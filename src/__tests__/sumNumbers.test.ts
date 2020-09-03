import assert from 'power-assert';
import { sumNumbers } from '../sumNumbers';
import { TreeNode } from '../../model/TreeNode';

describe('src/sumNumbers', () => {
  describe('sumNumbers', () => {
    it('[1,2,3]', () => assert.strictEqual(sumNumbers(TreeNode.createdNumberTree([1, 2, 3])), 25));
    it('[4,9,0,5,1]', () =>
      assert.strictEqual(sumNumbers(TreeNode.createdNumberTree([4, 9, 0, 5, 1])), 1026));
  });
});
