import assert from 'power-assert';
import { findMinArrowShots } from '../findMinArrowShots';

describe('src/findMinArrowShots', () => {
  describe('findMinArrowShots', () => {
    it('[[10,16],[2,8],[1,6],[7,12]]', () =>
      assert.strictEqual(
        findMinArrowShots([
          [10, 16],
          [2, 8],
          [1, 6],
          [7, 12]
        ]),
        2
      ));
    it('[[1,2],[3,4],[5,6],[7,8]]', () =>
      assert.strictEqual(
        findMinArrowShots([
          [1, 2],
          [3, 4],
          [5, 6],
          [7, 8]
        ]),
        4
      ));
    it('[[1,2],[2,3],[3,4],[4,5]]', () =>
      assert.strictEqual(
        findMinArrowShots([
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5]
        ]),
        2
      ));
    it('[[1,2]]', () => assert.strictEqual(findMinArrowShots([[1, 2]]), 1));
    it('[[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]', () =>
      assert.strictEqual(
        findMinArrowShots([
          [3, 9],
          [7, 12],
          [3, 8],
          [6, 8],
          [9, 10],
          [2, 9],
          [0, 9],
          [3, 9],
          [0, 6],
          [2, 8]
        ]),
        2
      ));
  });
});
