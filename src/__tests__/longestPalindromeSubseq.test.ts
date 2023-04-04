import assert from 'power-assert';
import { longestPalindromeSubseq } from '../longestPalindromeSubseq';

describe('src/longestPalindromeSubseq', () => {
  describe('longestPalindromeSubseq', () => {
    it('bbbab', () => assert.strictEqual(longestPalindromeSubseq('bbbab'), 4));
    it('cbbd', () => assert.strictEqual(longestPalindromeSubseq('cbbd'), 2));
  });
});
