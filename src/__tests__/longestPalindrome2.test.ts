import assert from 'power-assert';
import { longestPalindrome } from '../longestPalindrome2';

describe('src/longestPalindrome2', () => {
  describe('longestPalindrome', () => {
    it('abccccdd', () => assert.strictEqual(longestPalindrome('abccccdd'), 7));
  });
});
