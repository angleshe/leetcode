import assert from 'power-assert';
import { removeDuplicateLetters } from '../removeDuplicateLetters';

describe('src/removeDuplicateLetters', () => {
  describe('removeDuplicateLetters', () => {
    it('bcabc', () => assert.strictEqual(removeDuplicateLetters('bcabc'), 'abc'));
    it('cbacdcbc', () => assert.strictEqual(removeDuplicateLetters('cbacdcbc'), 'acdb'));
    it('bbcaac', () => assert.strictEqual(removeDuplicateLetters('bbcaac'), 'bac'));
  });
});
