import assert from 'power-assert';
import { getCenterNode, reverseList, mergeList, reorderList } from '../reorderList';
import { ListNode } from '../../model/ListNode';

describe('src/reorderList', () => {
  describe('getCenterNode', () => {
    it('1->2->3', () => assert.strictEqual(getCenterNode(ListNode.createList('1->2->3')!).val, 2));
    it('1->2->3->4', () =>
      assert.strictEqual(getCenterNode(ListNode.createList('1->2->3')!).val, 2));
  });
  describe('reverseList', () => {
    it('1->2->3', () =>
      assert.strictEqual(
        reverseList(ListNode.createList('1->2->3') ?? null)?.toString(),
        '3->2->1'
      ));
    it('1->2->3->4', () =>
      assert.strictEqual(
        reverseList(ListNode.createList('1->2->3->4') ?? null)?.toString(),
        '4->3->2->1'
      ));
  });
  describe('mergeList', () => {
    const test1: ListNode = ListNode.createList('1->2->3')!;
    const test2: ListNode = ListNode.createList('1->2->3')!;
    it('1->2->3, 4->5->6', () => {
      mergeList(test1, ListNode.createList('4->5->6')!);
      assert.strictEqual(test1.toString(), '1->4->2->5->3->6');
    });
    it('1->2->3, 4->5', () => {
      mergeList(test2, ListNode.createList('4->5')!);
      assert.strictEqual(test2.toString(), '1->4->2->5->3');
    });
  });
  describe('reorderList', () => {
    const test1 = ListNode.createList('1->2->3->4')!;
    const test2 = ListNode.createList('1->2->3->4->5')!;
    it(test1.toString(), () => {
      reorderList(test1);
      assert.strictEqual(test1.toString(), '1->4->2->3');
    });
    it(test2.toString(), () => {
      reorderList(test2);
      assert.strictEqual(test2.toString(), '1->5->2->4->3');
    });
  });
});
