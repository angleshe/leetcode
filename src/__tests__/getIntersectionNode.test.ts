import assert from 'power-assert';
import { getIntersectionNode } from '../getIntersectionNode';
import { ListNode } from '../../model/ListNode';

describe('src/getIntersectionNode', () => {
  describe('getIntersectionNode', () => {
    const [test1A, test1B] = ListNode.createdIntersectionLists('4->1', '5->0->1', '8->4->5');
    const [test2A, test2B] = ListNode.createdIntersectionLists('0->9->->1', '3', '2->4');

    it('[4,1,8,4,5], [5,0,1,8,4,5]', () =>
      assert.strictEqual(getIntersectionNode(test1A, test1B)?.toString(), '8->4->5'));
    it('[0,9,1,2,4], [3,2,4]', () =>
      assert.strictEqual(getIntersectionNode(test2A, test2B)?.toString(), '2->4'));
    it('[2,6,4], [1,5]', () =>
      assert.strictEqual(
        getIntersectionNode(ListNode.createList('2->6->4')!, ListNode.createList('1->5')!),
        null
      ));
  });
});
