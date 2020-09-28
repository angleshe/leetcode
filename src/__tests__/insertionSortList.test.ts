import assert from 'power-assert';
import { insertionSortList } from '../insertionSortList';
import { ListNode } from '../../model/ListNode';

describe('src/insertionSortList', () => {
  describe('insertionSortList', () => {
    it('4->2->1->3', () =>
      assert.strictEqual(
        insertionSortList(ListNode.createList('4->2->1->3')!)?.toString(),
        '1->2->3->4'
      ));
    it('-1->5->3->4->0', () =>
      assert.strictEqual(
        insertionSortList(ListNode.createList('-1->5->3->4->0')!)?.toString(),
        '-1->0->3->4->5'
      ));
  });
});
