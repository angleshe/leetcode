import assert from 'power-assert';
import { wordBreak } from '../wordBreak2';

describe('src/wordBreak2', () => {
  describe('wordBreak', () => {
    it('catsanddog, ["cat", "cats", "and", "sand", "dog"]', () =>
      assert.deepStrictEqual(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']), [
        'cat sand dog',
        'cats and dog'
      ]));
    it('pineapplepenapple, ["apple", "pen", "applepen", "pine", "pineapple"]', () =>
      assert.deepStrictEqual(
        wordBreak('pineapplepenapple', ['apple', 'pen', 'applepen', 'pine', 'pineapple']),
        ['pine apple pen apple', 'pine applepen apple', 'pineapple pen apple']
      ));
    it('catsandog, ["cats", "dog", "sand", "and", "cat"]', () =>
      assert.deepStrictEqual(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']), []));
    it('"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]', () =>
      assert.deepStrictEqual(
        wordBreak(
          'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
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
        ),
        []
      ));
    it('"aaaaaaa", ["aaaa","aa","a"]', () =>
      assert.deepStrictEqual(wordBreak('aaaaaaa', ['aaaa', 'aa', 'a']), [
        'a a a a a a a',
        'a a a a a aa',
        'a a a a aa a',
        'a a a aa a a',
        'a a a aa aa',
        'a a a aaaa',
        'a a aa a a a',
        'a a aa a aa',
        'a a aa aa a',
        'a a aaaa a',
        'a aa a a a a',
        'a aa a a aa',
        'a aa a aa a',
        'a aa aa a a',
        'a aa aa aa',
        'a aa aaaa',
        'a aaaa a a',
        'a aaaa aa',
        'aa a a a a a',
        'aa a a a aa',
        'aa a a aa a',
        'aa a aa a a',
        'aa a aa aa',
        'aa a aaaa',
        'aa aa a a a',
        'aa aa a aa',
        'aa aa aa a',
        'aa aaaa a',
        'aaaa a a a',
        'aaaa a aa',
        'aaaa aa a'
      ]));
  });
});
