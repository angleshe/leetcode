import assert from 'power-assert';
import { isPalindrome } from '../isPalindrome2';

describe('src/isPalindrome2', () => {
  describe('isPalindrome', () => {
    it('A man, a plan, a canal: Panama', () =>
      assert.ok(isPalindrome('A man, a plan, a canal: Panama')));
    it('race a car', () => assert.ok(!isPalindrome('race a car')));
  });
});
