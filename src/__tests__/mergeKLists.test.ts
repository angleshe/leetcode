import assert from 'assert';
import { ListNode, mergeKLists } from '../mergeKLists';
const testList: ListNode = new ListNode(1);
describe('src/mergeKLists', () => {
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
  });
  describe('mergeKLists', () => {
    it('[]', () => {
      assert.strictEqual(null, mergeKLists([]));
    });
    it('[null, null, null]', () => {
      assert.strictEqual(null, mergeKLists([null, null, null]));
    });
    it(`[ 1->4->5, 1->3->4, 2->6]`, () => {
      assert.strictEqual(
        '1->1->2->3->4->4->5->6',
        mergeKLists(
          ['1->4->5', '1->3->4', '2->6'].map((item) => ListNode.createList(item) as ListNode)
        )?.toString()
      );
    });
  });
});
