import assert from 'power-assert';
import { partition } from '../partition';
import { ListNode } from '../../model/ListNode';

describe('src/partition', () => {
  describe('partition', () => {
    const test1: ListNode<number> = ListNode.createList('1->4->3->2->5->2')!;
    const test2: ListNode<number> = ListNode.createList('3->1->2')!;
    it(`${test1?.toString()}, 3`, () => {
      assert.strictEqual(partition(test1, 3)?.toString(), '1->2->2->4->3->5');
    });
    it(`${test2?.toString()}, 3`, () => {
      assert.strictEqual(partition(test2, 3)?.toString(), '1->2->3');
    });
  });
});
