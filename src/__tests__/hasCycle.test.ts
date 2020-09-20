import assert from 'power-assert';
import { hasCycle } from '../hasCycle';
import { ListNode } from '../../model/ListNode';

describe('src/hasCycle', () => {
  describe('hasCycle', () => {
    it('[3,2,0,-4], 1', () => assert.ok(hasCycle(ListNode.createdCycleList([3, 2, 0, -4], 1))));
    it('[1,2], 0', () => assert.ok(hasCycle(ListNode.createdCycleList([1, 2], 0))));
    it('[1], -1', () => assert.ok(!hasCycle(ListNode.createdCycleList([1], -1))));
  });
});
