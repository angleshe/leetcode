import assert from 'power-assert';
import { serialize, deserialize } from '../serialize';
import { TreeNode } from '../../model/TreeNode';

describe('src/serialize', () => {
  describe('serialize', () => {
    it('[1,2,3,null,null,4,5]', () =>
      assert.strictEqual(
        serialize(TreeNode.createdNumberTree([1, 2, 3, null, null, 4, 5])),
        '1,2,n,n,3,4,n,n,5,n,n'
      ));
    it('[]', () => assert.strictEqual(serialize(null), 'n'));
    it('[1]', () => assert.strictEqual(serialize(TreeNode.createdNumberTree([1])), '1,n,n'));
    it('[1,2]', () =>
      assert.strictEqual(serialize(TreeNode.createdNumberTree([1, 2])), '1,2,n,n,n'));
  });
  describe('deserialize', () => {
    it('1,2,n,n,3,4,n,n,5,n,n', () =>
      assert.deepStrictEqual(deserialize('1,2,n,n,3,4,n,n,5,n,n')?.toString(), [
        1,
        2,
        3,
        null,
        null,
        4,
        5
      ]));
    it('n', () => assert.strictEqual(deserialize('n'), null));
    it('1,n,n', () => assert.deepStrictEqual(deserialize('1,n,n')?.toString(), [1]));
    it('1,2,n,n,n', () => assert.deepStrictEqual(deserialize('1,2,n,n,n')?.toString(), [1, 2]));
  });
});
