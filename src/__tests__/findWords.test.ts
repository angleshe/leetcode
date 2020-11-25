import assert from 'power-assert';
import { findWords } from '../findWords';

describe('src/findWords', () => {
  describe('findWords', () => {
    it('[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"]', () =>
      assert.deepStrictEqual(
        findWords(
          [
            ['o', 'a', 'a', 'n'],
            ['e', 't', 'a', 'e'],
            ['i', 'h', 'k', 'r'],
            ['i', 'f', 'l', 'v']
          ],
          ['oath', 'pea', 'eat', 'rain']
        ),
        ['oath', 'eat']
      ));
    it('[["a","b"],["c","d"]], ["abcb"]', () =>
      assert.deepStrictEqual(
        findWords(
          [
            ['a', 'b'],
            ['c', 'd']
          ],
          ['abcb']
        ),
        []
      ));
  });
});
