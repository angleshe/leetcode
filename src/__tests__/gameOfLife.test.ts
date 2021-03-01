import assert from 'power-assert';
import { gameOfLife } from '../gameOfLife';
import { showContent } from '../utils';

describe('src/gameOfLife', () => {
  describe('gameOfLife', () => {
    const test1 = [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0]
    ];
    const test2 = [
      [1, 1],
      [1, 0]
    ];
    it(showContent(test1), () => {
      gameOfLife(test1);
      assert.deepStrictEqual(test1, [
        [0, 0, 0],
        [1, 0, 1],
        [0, 1, 1],
        [0, 1, 0]
      ]);
    });

    it(showContent(test2), () => {
      gameOfLife(test2);
      assert.deepStrictEqual(test2, [
        [1, 1],
        [1, 1]
      ]);
    });
  });
});
