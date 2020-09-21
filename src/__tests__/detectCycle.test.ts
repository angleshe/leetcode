import assert from 'power-assert';
import { detectCycle } from '../detectCycle';
import { ListNode } from '../../model/ListNode';

describe('src/detectCycle', () => {
  describe('detectCycle', () => {
    const test1: ListNode = ListNode.createdCycleList([3, 2, 0, -4], 1)!;
    const test2: ListNode = ListNode.createdCycleList([1, 2], 0)!;
    const test3: ListNode = ListNode.createdCycleList([1], -1)!;
    it('[3,2,0,-4], 1', () => assert.strictEqual(detectCycle(test1), test1.getNode(1)));
    it('[1,2], 0', () => assert.strictEqual(detectCycle(test2), test2.getNode(2)));
    it('[3,2,0,-4], 1', () => assert.strictEqual(detectCycle(test3), null));
  });
});
