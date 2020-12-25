import assert from 'power-assert';
import { countNodes } from '../countNodes';
import { TreeNode } from '../../model/TreeNode';

describe('src/countNodes', () => {
  describe('countNodes', () => {
    it('[1, 2, 3, 4, 5, 6]', () =>
      assert.strictEqual(countNodes(TreeNode.createdNumberTree([1, 2, 3, 4, 5, 6])), 6));
  });
});
