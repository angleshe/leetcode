import assert from 'power-assert';
import { isPalindrome } from '../isPalindrome3';
import { ListNode } from '../../model/ListNode';

describe('src/isPalindrome3', () => {
  describe('isPalindrome', () => {
    it('1->2', () => assert.ok(!isPalindrome(ListNode.createList('1->2')!)));
    it('1->2->2->1', () => assert.ok(isPalindrome(ListNode.createList('1->2->2->1')!)));
    it('', () => assert.ok(isPalindrome(null)));
  });
});
