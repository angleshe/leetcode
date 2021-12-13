import assert from 'power-assert';
import { pacificAtlantic } from '../pacificAtlantic';
import { showContent } from '../utils';

describe('src/pacificAtlantic', () => {
  describe('pacificAtlantic', () => {
    const test1 = [
      [1, 2, 2, 3, 5],
      [3, 2, 3, 4, 4],
      [2, 4, 5, 3, 1],
      [6, 7, 1, 4, 5],
      [5, 1, 1, 2, 4]
    ];
    it(showContent(test1), () =>
      assert.deepStrictEqual(pacificAtlantic(test1), [
        [0, 4],
        [1, 4],
        [1, 3],
        [2, 2],
        [4, 0],
        [3, 0],
        [3, 1]
      ])
    );
  });
});
