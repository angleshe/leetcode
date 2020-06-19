import assert from 'power-assert';
import { setZeroes } from '../setZeroes';
import { showContent } from '../utils';

describe('src/setZeroes', () => {
  describe('setZeroes', () => {
    const test1: number[][] = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1]
    ];
    const test2: number[][] = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5]
    ];
    const test3: number[][] = [[1, 0]];
    const test4: number[][] = [
      [1, 1, 1],
      [0, 1, 2]
    ];
    it(showContent(test1), () => {
      setZeroes(test1);
      assert.deepStrictEqual(test1, [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1]
      ]);
    });
    it(showContent(test2), () => {
      setZeroes(test2);
      assert.deepStrictEqual(test2, [
        [0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0]
      ]);
    });
    it(showContent(test3), () => {
      setZeroes(test3);
      assert.deepStrictEqual(test3, [[0, 0]]);
    });
    it(showContent(test4), () => {
      setZeroes(test4);
      assert.deepStrictEqual(test4, [
        [0, 1, 1],
        [0, 0, 0]
      ]);
    });
  });
});
