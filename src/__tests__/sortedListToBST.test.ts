import assert from 'power-assert';
import { getListSize, sortedListToBST } from '../sortedListToBST';
import { ListNode } from '../../model/ListNode';

describe('src/sortedListToBST', () => {
  describe('getListSize', () => {
    it('-10->-3->0->5->9', () => {
      assert.strictEqual(getListSize(ListNode.createList('-10->-3->0->5->9')!), 5);
    });
  });
  describe('sortedListToBST', () => {
    it('[-10, -3, 0, 5, 9]', () => {
      assert.deepStrictEqual(
        sortedListToBST(ListNode.createList([-10, -3, 0, 5, 9].join('->'))!)?.toString(),
        [0, -10, 5, null, -3, null, 9]
      );
    });
  });
});
