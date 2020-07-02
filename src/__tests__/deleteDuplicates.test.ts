import assert from 'power-assert';
import { deleteDuplicates } from '../deleteDuplicates';
import { ListNode } from '../../model/ListNode';

describe('src/deleteDuplicates', () => {
  describe('deleteDuplicates', () => {
    const test1: ListNode<number> = ListNode.createList('1->2->3->3->4->4->5') as ListNode<number>;
    const test2: ListNode<number> = ListNode.createList('1->1->1->2->3') as ListNode<number>;
    it(test1.toString(), () => {
      assert.strictEqual(deleteDuplicates(test1)?.toString(), '1->2->5');
    });
    it(test2.toString(), () => {
      assert.strictEqual(deleteDuplicates(test2)?.toString(), '2->3');
    });
  });
});
