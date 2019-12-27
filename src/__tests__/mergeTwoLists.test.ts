import { ListNode, mergeTwoLists } from '../mergeTwoLists';
import assert from 'assert';
const testList: ListNode = new ListNode(1);
describe('src/mergeTwoList', () => {
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
  describe('ListNode.creatList', () => {
    it('', () => {
      assert.strictEqual(undefined, ListNode.creatList(''));
    });
    it('1', () => {
      assert.strictEqual(JSON.stringify(ListNode.creatList('1')), JSON.stringify(new ListNode(1)));
    });
    it('1->2->3', () => {
      assert.strictEqual(JSON.stringify(ListNode.creatList('1->2->3')), JSON.stringify(testList));
    });
  });
  describe('mergeTowLists', () => {
    const l1: ListNode = ListNode.creatList('1->2->4') as ListNode;
    const l2: ListNode = ListNode.creatList('1->3->4') as ListNode;
    it(`${l1.toString()},${l2.toString()}`, () => {
      assert.strictEqual('1->1->2->3->4->4', mergeTwoLists(l1, l2)?.toString());
    });
    it(' , ', () => {
      assert.strictEqual(undefined, mergeTwoLists(undefined, undefined));
    });
    it(`${l1.toString()}, `, () => {
      assert.strictEqual(l1.toString(), mergeTwoLists(l1, undefined)?.toString());
    });
    it(` ,${l1.toString()}`, () => {
      assert.strictEqual(l1.toString(), mergeTwoLists(undefined, l1)?.toString());
    });
  });
});
