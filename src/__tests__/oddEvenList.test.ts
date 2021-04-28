import assert from 'power-assert';
import { oddEvenList } from '../oddEvenList';
import { ListNode } from '../../model/ListNode';

describe('src/oddEvenList', () => {
  describe('oddEvenList', () => {
    it('[1,2,3,4,5]', () =>
      assert.strictEqual(
        oddEvenList(ListNode.createList([1, 2, 3, 4, 5].join('->')) ?? null)?.toString(),
        [1, 3, 5, 2, 4].join('->')
      ));

    it('[2,1,3,5,6,4,7]', () =>
      assert.strictEqual(
        oddEvenList(ListNode.createList([2, 1, 3, 5, 6, 4, 7].join('->')) ?? null)?.toString(),
        [2, 3, 6, 7, 1, 5, 4].join('->')
      ));
  });
});
