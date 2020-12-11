import assert from 'power-assert';
import { shortestPalindrome } from '../shortestPalindrome';

describe('src/shortestPalindrome', () => {
  describe('shortestPalindrome', () => {
    it('aacecaaa', () => assert.strictEqual(shortestPalindrome('aacecaaa'), 'aaacecaaa'));
    it('abcd', () => assert.strictEqual(shortestPalindrome('abcd'), 'dcbabcd'));
  });
});
