import assert from 'power-assert';
import { rightSideView } from '../rightSideView';
import { TreeNode } from '../../model/TreeNode';

describe('src/rightSideView', () => {
  describe('rightSideView', () => {
    it('[1,2,3,null,5,null,4]', () =>
      assert.deepStrictEqual(
        rightSideView(TreeNode.createdNumberTree([1, 2, 3, null, 5, null, 4])),
        [1, 3, 4]
      ));
  });
});
