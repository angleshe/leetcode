import assert from 'power-assert';
import { longestSubstring } from '../longestSubstring';

describe('src/longestSubstring', () => {
  describe('longestSubstring', () => {
    it('aaabb, 3', () => assert.strictEqual(longestSubstring('aaabb', 3), 3));
    it('ababbc, 2', () => assert.strictEqual(longestSubstring('ababbc', 2), 5));
  });
});
