import assert from 'power-assert';
import { reverseVowels } from '../reverseVowels';

describe('src/reverseVowels', () => {
  describe('reverseVowels', () => {
    it('hello', () => assert.strictEqual(reverseVowels('hello'), 'holle'));
    it('leetcode', () => assert.strictEqual(reverseVowels('leetcode'), 'leotcede'));
  });
});
