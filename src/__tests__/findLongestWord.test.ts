import { findLongestWord } from '../findLongestWord';
import assert from 'power-assert';

describe('src/findLongestWord', () => {
  describe('findLongestWord', () => {
    it('abpcplea, ["ale","apple","monkey","plea"]', () =>
      assert.equal(findLongestWord('abpcplea', ['ale', 'apple', 'monkey', 'plea']), 'apple'));
    it('abpcplea, ["a","b","c"]', () =>
      assert.equal(findLongestWord('abpcplea', ['a', 'b', 'c']), 'a'));
  });
});
