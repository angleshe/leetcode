import { removeNthFromEnd, createList, showListNode, IListNode } from '../removeNthFromEnd';
import { showContent } from '../utils';
import assert from 'assert';
describe('src/removeNthFromEnd', () => {
  describe('showListNode', () => {
    const testListNode: IListNode = {
      val: 'a',
      next: {
        val: 'b',
        next: {
          val: 'c',
          next: null
        }
      }
    };
    it(showContent(testListNode), () => {
      assert.strictEqual('a->b->c', showListNode(testListNode));
    });
    it('null', () => {
      assert.strictEqual('', showListNode(null));
    });
  });
  describe('createList', () => {
    it('t->e->s->t', () => {
      assert.strictEqual('t->e->s->t', showListNode(createList('t->e->s->t')));
    });
    it('', () => {
      assert.strictEqual(null, createList(''));
    });
  });
  describe('removeNthFromEnd', () => {
    it('1->2->3->4->5, 2', () => {
      assert.strictEqual(
        '1->2->3->5',
        showListNode(removeNthFromEnd(createList('1->2->3->4->5') as IListNode, 2))
      );
    });
    it('1->2->3->4->5, 1', () => {
      assert.strictEqual(
        '1->2->3->4',
        showListNode(removeNthFromEnd(createList('1->2->3->4->5') as IListNode, 1))
      );
    });
    it('1->2->3->4->5, 5', () => {
      assert.strictEqual(
        '2->3->4->5',
        showListNode(removeNthFromEnd(createList('1->2->3->4->5') as IListNode, 5))
      );
    });
  });
});
