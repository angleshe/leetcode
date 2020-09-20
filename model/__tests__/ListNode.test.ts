import assert from 'assert';
import { ListNode } from '../ListNode';
const testList: ListNode<number> = new ListNode<number>(1);
describe('model/ListNode', () => {
  describe('ListNode.toString', () => {
    it('1', () => {
      assert.strictEqual('1', testList.toString());
    });
    it('1->2->3', () => {
      testList.next = new ListNode(2);
      testList.next.next = new ListNode(3);
      assert.strictEqual('1->2->3', testList.toString());
    });
  });
  describe('ListNode.createList', () => {
    it('', () => {
      assert.strictEqual(undefined, ListNode.createList(''));
    });
    it('1', () => {
      assert.strictEqual(JSON.stringify(ListNode.createList('1')), JSON.stringify(new ListNode(1)));
    });
    it('1->2->3', () => {
      assert.strictEqual(JSON.stringify(ListNode.createList('1->2->3')), JSON.stringify(testList));
    });
    it('1->2↩︎0', () => {
      assert.strictEqual(ListNode.createdCycleList([1, 2], 0)?.toString(), '1->2↩︎0');
    });
    it('3->2->0->-4↩︎1', () => {
      assert.strictEqual(ListNode.createdCycleList([3, 2, 0, -4], 1)?.toString(), '3->2->0->-4↩︎1');
    });
    it('1', () => {
      assert.strictEqual(ListNode.createdCycleList([1], -1)?.toString(), '1');
    });
  });
});
