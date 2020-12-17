import assert from 'power-assert';
import { getSkyline, insertList } from '../getSkyline';

describe('src/getSkyline', () => {
  describe('insertList', () => {
    it('[1, 2, 6, 7], 4', () => {
      const list = [1, 2, 6, 7];
      insertList(list, 4);
      assert.deepStrictEqual(list, [1, 2, 4, 6, 7]);
    });
    it('[1, 2, 5, 6, 7], 4', () => {
      const list = [1, 2, 5, 6, 7];
      insertList(list, 4);
      assert.deepStrictEqual(list, [1, 2, 4, 5, 6, 7]);
    });
  });

  describe('getSkyLine', () => {
    it('[[0,2,3],[2,5,3]]', () =>
      assert.deepStrictEqual(
        getSkyline([
          [0, 2, 3],
          [2, 5, 3]
        ]),
        [
          [0, 3],
          [5, 0]
        ]
      ));
    it('[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]', () =>
      assert.deepStrictEqual(
        getSkyline([
          [2, 9, 10],
          [3, 7, 15],
          [5, 12, 12],
          [15, 20, 10],
          [19, 24, 8]
        ]),
        [
          [2, 10],
          [3, 15],
          [7, 12],
          [12, 0],
          [15, 10],
          [20, 8],
          [24, 0]
        ]
      ));
  });
});
