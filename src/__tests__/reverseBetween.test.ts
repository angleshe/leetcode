import assert from 'power-assert';
import { reverseBetween } from '../reverseBetween';
import { ListNode } from '../../model/ListNode';

describe('src/reverseBetween', () => {
  describe('reverseBetween', () => {
    const test1: ListNode = ListNode.createList('1->2->3->4->5')!;
    const test2: ListNode = ListNode.createList('3->5')!;
    const test3: ListNode = ListNode.createList('1->2->3->4->5')!;
    it(`${test1.toString()}, 2, 4`, () => {
      assert.strictEqual(reverseBetween(test1, 2, 4)?.toString(), '1->4->3->2->5');
    });
    it(`${test2.toString()}, 1, 2`, () => {
      assert.strictEqual(reverseBetween(test2, 1, 2)?.toString(), '5->3');
    });
    it(`${test3.toString()}, 1, 2`, () => {
      assert.strictEqual(reverseBetween(test3, 1, 2)?.toString(), '2->1->3->4->5');
    });
  });
});
