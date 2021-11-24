import assert from 'power-assert';
import { trapRainWater } from '../trapRainWater';

describe('src/trapRainWater', () => {
  describe('trapRainWater', () => {
    it('[[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]', () =>
      assert.strictEqual(
        trapRainWater([
          [1, 4, 3, 1, 3, 2],
          [3, 2, 1, 3, 2, 4],
          [2, 3, 3, 2, 3, 1]
        ]),
        4
      ));
    it('[[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]', () =>
      assert.strictEqual(
        trapRainWater([
          [3, 3, 3, 3, 3],
          [3, 2, 2, 2, 3],
          [3, 2, 1, 2, 3],
          [3, 2, 2, 2, 3],
          [3, 3, 3, 3, 3]
        ]),
        10
      ));
    it('[[12,13,1,12],[13,4,13,12],[13,8,10,12],[12,13,12,12],[13,13,13,13]]', () =>
      assert.strictEqual(
        trapRainWater([
          [12, 13, 1, 12],
          [13, 4, 13, 12],
          [13, 8, 10, 12],
          [12, 13, 12, 12],
          [13, 13, 13, 13]
        ]),
        14
      ));
  });
});
