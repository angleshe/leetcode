import assert from 'power-assert';
import { wordBreak } from '../wordBreak';

describe('src/wordBreak', () => {
  describe('wordBreak', () => {
    it('leetcode, ["leet", "code"]', () => assert.ok(wordBreak('leetcode', ['leet', 'code'])));
    it('applepenapple, ["apple", "pen"]', () =>
      assert.ok(wordBreak('applepenapple', ['apple', 'pen'])));
    it('catsandog, ["cats", "dog", "sand", "and", "cat"]', () =>
      assert.ok(!wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])));
    it('"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab" ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]', () =>
      assert.ok(
        !wordBreak(
          'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
          [
            'a',
            'aa',
            'aaa',
            'aaaa',
            'aaaaa',
            'aaaaaa',
            'aaaaaaa',
            'aaaaaaaa',
            'aaaaaaaaa',
            'aaaaaaaaaa'
          ]
        )
      ));
    it('"catsandogcat" ["cats","dog","sand","and","cat","an"]', () =>
      assert.ok(wordBreak('catsandogcat', ['cats', 'dog', 'sand', 'and', 'cat', 'an'])));
  });
});
