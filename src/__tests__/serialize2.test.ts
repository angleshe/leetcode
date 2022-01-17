import assert from 'power-assert';
import { serialize, deserialize } from '../serialize2';
import { TreeNode } from '../../model/TreeNode';

describe('src/serialize2', () => {
  describe('serialize', () => {
    it('[2,1,3]', () =>
      assert.deepStrictEqual(
        deserialize(serialize(TreeNode.createdNumberTree([2, 1, 3])))?.toString(),
        [2, 1, 3]
      ));
    it('[]', () =>
      assert.deepStrictEqual(
        deserialize(serialize(TreeNode.createdNumberTree([])))?.toString() ?? [],
        []
      ));
    it('[3,1,4,null,2]', () =>
      assert.deepStrictEqual(
        deserialize(serialize(TreeNode.createdNumberTree([3, 1, 4, null, 2])))?.toString() ?? [],
        [3, 1, 4, null, 2]
      ));
  });
});
