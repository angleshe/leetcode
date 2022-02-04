import assert from 'power-assert';
import { repeatedSubstringPattern } from '../repeatedSubstringPattern';

describe('src/repeatedSubstringPattern', () => {
  describe('repeatedSubstringPattern', () => {
    it('abab', () => assert.ok(repeatedSubstringPattern('abab')));
    it('aba', () => assert.ok(!repeatedSubstringPattern('aba')));
    it('abcabcabcabc', () => assert.ok(repeatedSubstringPattern('abcabcabcabc')));
  });
});
