import assert from 'power-assert';
import { findAnagrams } from '../findAnagrams';

describe('src/findAnagrams', () => {
  describe('findAnagrams', () => {
    it('cbaebabacd, abc', () => assert.deepStrictEqual(findAnagrams('cbaebabacd', 'abc'), [0, 6]));
    it('abab, ab', () => assert.deepStrictEqual(findAnagrams('abab', 'ab'), [0, 1, 2]));
    it('abaacbabc, abc', () => assert.deepStrictEqual(findAnagrams('abaacbabc', 'abc'), [3, 4, 6]));
  });
});
