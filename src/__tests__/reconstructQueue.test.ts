import assert from 'power-assert';
import { reconstructQueue } from '../reconstructQueue';

describe('src/reconstructQueue', () => {
  describe('reconstructQueue', () => {
    it('[[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]', () =>
      assert.deepStrictEqual(
        reconstructQueue([
          [7, 0],
          [4, 4],
          [7, 1],
          [5, 0],
          [6, 1],
          [5, 2]
        ]),
        [
          [5, 0],
          [7, 0],
          [5, 2],
          [6, 1],
          [4, 4],
          [7, 1]
        ]
      ));
    it('[[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]', () =>
      assert.deepStrictEqual(
        reconstructQueue([
          [6, 0],
          [5, 0],
          [4, 0],
          [3, 2],
          [2, 2],
          [1, 4]
        ]),
        [
          [4, 0],
          [5, 0],
          [2, 2],
          [3, 2],
          [1, 4],
          [6, 0]
        ]
      ));
  });
});
