import assert from 'power-assert';
import { largestPalindrome } from '../largestPalindrome';

describe('src/largestPalindrome', () => {
  describe('largestPalindrome', () => {
    it('2', () => assert.strictEqual(largestPalindrome(2), 987));
    it('1', () => assert.strictEqual(largestPalindrome(1), 9));
    it('3', () => assert.strictEqual(largestPalindrome(3), 123));
    it('8', () => assert.strictEqual(largestPalindrome(8), 475));
  });
});
