import assert from 'power-assert';
import { BSTIterator } from '../BSTIterator';
import { TreeNode } from '../../model/TreeNode';

describe('src/BSTIterator', () => {
  describe('BSTIterator', () => {
    const testNode: TreeNode = TreeNode.createdNumberTree([7, 3, 15, null, null, 9, 20])!;
    const testIterator: BSTIterator = new BSTIterator(testNode);
    it('1', () => assert.strictEqual(testIterator.next(), 3));
    it('2', () => assert.strictEqual(testIterator.next(), 7));
    it('hasNext', () => assert.ok(testIterator.hasNext()));
    it('3', () => assert.strictEqual(testIterator.next(), 9));
    it('hasNext', () => assert.ok(testIterator.hasNext()));
    it('4', () => assert.strictEqual(testIterator.next(), 15));
    it('hasNext', () => assert.ok(testIterator.hasNext()));
    it('5', () => assert.strictEqual(testIterator.next(), 20));
    it('hasNext', () => assert.ok(!testIterator.hasNext()));
  });
});
