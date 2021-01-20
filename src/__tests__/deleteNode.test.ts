import assert from 'power-assert';
import { deleteNode } from '../deleteNode';
import { ListNode } from '../../model/ListNode';

describe('src/deleteNode', () => {
  describe('deleteNode', () => {
    const test1: ListNode = ListNode.createList('4->5->1->9')!;
    const test2: ListNode = ListNode.createList('4->5->1->9')!;
    deleteNode(test1.next);
    deleteNode(test2.next!.next);
    it(`[4,5,1,9], 5`, () => assert.strictEqual(test1.toString(), '4->1->9'));
    it(`[4,5,1,9], 1`, () => assert.strictEqual(test2.toString(), '4->5->9'));
  });
});
