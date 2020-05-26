import assert from 'power-assert';
import { spiralOrder } from '../spiralOrder';
import { showContent } from '../utils';

describe('src/spiralOrder', () => {
  describe('spiralOrder', () => {
    it(
      showContent([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]),
      () => {
        assert.deepStrictEqual(
          [1, 2, 3, 6, 9, 8, 7, 4, 5],
          spiralOrder([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
          ])
        );
      }
    );
    it(
      showContent([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
      ]),
      () => {
        assert.deepStrictEqual(
          [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
          spiralOrder([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12]
          ])
        );
      }
    );
    it(showContent([[7], [9], [6]]), () => {
      assert.deepStrictEqual([7, 9, 6], spiralOrder([[7], [9], [6]]));
    });
    it(showContent([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]), () => {
      assert.deepStrictEqual(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        spiralOrder([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]])
      );
    });
    it(
      showContent([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ]),
      () => {
        assert.deepStrictEqual(
          [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10],
          spiralOrder([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
          ])
        );
      }
    );
  });
});
