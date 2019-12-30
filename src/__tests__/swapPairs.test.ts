import { swapPairs } from '../swapPairs';
import { ListNode } from '../../model/ListNode';
import assert from 'assert';
describe('src/swapPairs', () => {
  describe('swapPairs', () => {
    it('1->2->3->4', () => {
      assert.strictEqual(
        '2->1->4->3',
        swapPairs(ListNode.createList('1->2->3->4') as ListNode<number>)?.toString()
      );
    });
  });
});
