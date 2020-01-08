import { findSubstring } from '../findSubstring';
import assert from 'power-assert';
import { showContent } from '../utils';
describe('src/findSubstring', () => {
  describe('findSubstring', () => {
    it(`barfoothefoobarman, ${showContent(['foo', 'bar'])}`, () => {
      assert.deepStrictEqual([0, 9], findSubstring('barfoothefoobarman', ['foo', 'bar']));
    });
    it(`wordgoodgoodgoodbestword, ${showContent(['word', 'good', 'best', 'word'])}`, () => {
      assert.deepStrictEqual(
        [],
        findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])
      );
    });
    it(`barfoofoobarthefoobarman, ${showContent(['bar', 'foo', 'the'])}`, () => {
      assert.deepStrictEqual(
        [6, 9, 12],
        findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])
      );
    });
    it(`a, ${showContent(['a'])}`, () => {
      assert.deepStrictEqual([0], findSubstring('a', ['a']));
    });
  });
});
