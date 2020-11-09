import assert from 'power-assert';
import { removeElements } from '../removeElements';
import { ListNode } from '../../model/ListNode';

describe('src/removeElements', () => {
  describe('removeElements', () => {
    it('1->2->6->3->4->5->6, 6', () => {
      assert.strictEqual(
        removeElements(ListNode.createList('1->2->6->3->4->5->6') ?? null, 6)?.toString(),
        '1->2->3->4->5'
      );
    });
  });
});
