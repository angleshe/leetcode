import assert from 'power-assert';
import { sortList } from '../sortList';
import { ListNode } from '../../model/ListNode';

describe('src/sortList', () => {
  describe('sortList', () => {
    it('4->2->1->3', () => {
      assert.strictEqual(sortList(ListNode.createList('4->2->1->3')!)?.toString(), '1->2->3->4');
    });
    it('-1->5->3->4->0', () => {
      assert.strictEqual(
        sortList(ListNode.createList('-1->5->3->4->0')!)?.toString(),
        '-1->0->3->4->5'
      );
    });
  });
});
