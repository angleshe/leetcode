import assert from 'power-assert';
import { addTwoNumbers } from '../addTwoNumbers';
import { ListNode } from '../../model/ListNode';

describe('src/addTwoNumbers', () => {
  describe('addTwoNumbers', () => {
    it('[7,2,4,3], [5,6,4]', () =>
      assert.strictEqual(
        addTwoNumbers(
          ListNode.createList([7, 2, 4, 3].join('->')) ?? null,
          ListNode.createList([5, 6, 4].join('->')) ?? null
        )?.toString(),
        [7, 8, 0, 7].join('->')
      ));
    it('[2,4,3], [5,6,4]', () =>
      assert.strictEqual(
        addTwoNumbers(
          ListNode.createList([2, 4, 3].join('->')) ?? null,
          ListNode.createList([5, 6, 4].join('->')) ?? null
        )?.toString(),
        [8, 0, 7].join('->')
      ));
    it('[0], [0]', () =>
      assert.strictEqual(
        addTwoNumbers(
          ListNode.createList([0].join('->')) ?? null,
          ListNode.createList([0].join('->')) ?? null
        )?.toString(),
        [0].join('->')
      ));
  });
});
