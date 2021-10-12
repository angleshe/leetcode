import assert from 'power-assert';
import { Solution } from '../SolutionClass';
import { ListNode } from '../../model/ListNode';

describe('src/SolutionClass', () => {
  describe('Solution', () => {
    const head1 = new ListNode(1);
    head1.next = new ListNode(2);
    head1.next.next = new ListNode(3);
    const solution1 = new Solution(head1);
    const test1 = solution1.getRandom();
    it('test1', () => assert.ok([1, 2, 3].includes(test1)));
  });
});
