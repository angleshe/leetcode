import assert from 'power-assert';
import { TreeNode } from '../../model/TreeNode';
import { largestValues } from '../largestValues';

describe('src/largestValue', () => {
  describe('largestValue', () => {
    it('[1, 3, 2, 5, 3, null, 9]', () => {
      const node = TreeNode.createdNumberTree([1, 3, 2, 5, 3, null, 9]);
      assert.deepStrictEqual(largestValues(node), [1, 3, 9]);
    });
    it('[1,2,3]', () => {
      const node = TreeNode.createdNumberTree([1, 2, 3]);
      assert.deepStrictEqual(largestValues(node), [1, 3]);
    });
  });
});
