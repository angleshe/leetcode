import assert from 'power-assert';
import { minPatches } from '../minPatches';

describe('src/minPatches', () => {
  describe('minPatches', () => {
    it('[1,3], 6', () => assert.strictEqual(minPatches([1, 3], 6), 1));
    it('[1,5,10], 20', () => assert.strictEqual(minPatches([1, 5, 10], 20), 2));
    it('[1,2,2], 5', () => assert.strictEqual(minPatches([1, 2, 2], 5), 0));
    it('[1,2,16,19,31,35,36,64,64,67,69,71,73,74,76,79,80,91,95,96,97], 8', () =>
      assert.strictEqual(
        minPatches(
          [1, 2, 16, 19, 31, 35, 36, 64, 64, 67, 69, 71, 73, 74, 76, 79, 80, 91, 95, 96, 97],
          8
        ),
        2
      ));
  });
});
