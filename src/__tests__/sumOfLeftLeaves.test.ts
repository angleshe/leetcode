import assert from 'power-assert';
import { sumOfLeftLeaves } from '../sumOfLeftLeaves';
import { TreeNode } from '../../model/TreeNode';
import { showContent } from '../utils';

describe('src/sumOfLeftLeaves', () => {
  describe('sumOfLeftLeaves', () => {
    const test1 = TreeNode.createdNumberTree([3, 9, 20, null, null, 15, 7])!;
    it(showContent(test1.toString()), () => assert.strictEqual(sumOfLeftLeaves(test1), 24));
  });
});
