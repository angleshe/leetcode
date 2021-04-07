import assert from 'power-assert';
import { maxProduct } from '../maxProduct2';

describe('src/maxProduct2', () => {
  describe('maxProduct', () => {
    it('["abcw","baz","foo","bar","xtfn","abcdef"]', () =>
      assert.strictEqual(maxProduct(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']), 16));
    it('["a","ab","abc","d","cd","bcd","abcd"]', () =>
      assert.strictEqual(maxProduct(['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd']), 4));
    it('["a","aa","aaa","aaaa"]', () =>
      assert.strictEqual(maxProduct(['a', 'aa', 'aaa', 'aaaa']), 0));
  });
});
