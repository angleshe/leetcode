import assert from 'power-assert';
import { rotateRight } from '../rotateRight';
import { ListNode } from '../../model/ListNode';

describe('src/rotateRight', () => {
  describe('rotateRight', () => {
    const testData1: ListNode<number> = ListNode.createList('1->2->3->4->5') as ListNode<number>;
    const testData2: ListNode<number> = ListNode.createList('0->1->2') as ListNode<number>;

    it(`${testData1.toString()}, 2`, () => {
      assert.strictEqual(
        rotateRight(testData1, 2)?.toString(),
        ListNode.createList('4->5->1->2->3')?.toString()
      );
    });

    it(`${testData2.toString()}, 4`, () => {
      assert.strictEqual(
        rotateRight(testData2, 4)?.toString(),
        ListNode.createList('2->0->1')?.toString()
      );
    });

    it('null, 1', () => {
      assert.strictEqual(rotateRight(null, 1), null);
    });
  });
});
