import assert from 'power-assert';
import { isPalindrome, palindromePairs } from '../palindromePairs';

describe('src/palindromePairs', () => {
  describe('isPalindrome', () => {
    it('', () => assert.ok(isPalindrome('')));
    it('a', () => assert.ok(isPalindrome('a')));
    it('cac', () => assert.ok(isPalindrome('cac')));
    it('caac', () => assert.ok(isPalindrome('caac')));
    it('cacc', () => assert.ok(!isPalindrome('cacc')));
  });
  describe('palindromePairs', () => {
    it('["abcd","dcba","lls","s","sssll"]', () =>
      assert.deepStrictEqual(palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']), [
        [1, 0],
        [0, 1],
        [3, 2],
        [2, 4]
      ]));
    it('["bat","tab","cat"]', () =>
      assert.deepStrictEqual(palindromePairs(['bat', 'tab', 'cat']), [
        [1, 0],
        [0, 1]
      ]));
    it('["a",""]', () =>
      assert.deepStrictEqual(palindromePairs(['a', '']), [
        [0, 1],
        [1, 0]
      ]));
  });
});
