import { ListNode } from '../../model/ListNode';
import { reverseKGroup } from '../reverseKGroup';
import assert from 'assert';
describe('src/reverseKGroup', () => {
  describe('reverseKGroup', () => {
    it('1->2->3->4->5, 2', () => {
      const testList: ListNode<number> = ListNode.createList('1->2->3->4->5') as ListNode<number>;
      assert.strictEqual('2->1->4->3->5', reverseKGroup(testList, 2)?.toString());
    });
    it('1->2->3->4->5, 3', () => {
      const testList: ListNode<number> = ListNode.createList('1->2->3->4->5') as ListNode<number>;
      assert.strictEqual('3->2->1->4->5', reverseKGroup(testList, 3)?.toString());
    });
    it('1->2, 2', () => {
      const testList: ListNode<number> = ListNode.createList('1->2') as ListNode<number>;
      assert.strictEqual('2->1', reverseKGroup(testList, 2)?.toString());
    });
  });
});
