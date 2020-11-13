import assert from 'power-assert';
import { reverseList } from '../reverseList';
import { ListNode } from '../../model/ListNode';

describe('src/reverseList', () => {
  describe('reverseList', () => {
    it('1->2->3->4->5->NULL', () =>
      assert.strictEqual(
        reverseList(ListNode.createList('1->2->3->4->5') ?? null)?.toString(),
        '5->4->3->2->1'
      ));
  });
});
