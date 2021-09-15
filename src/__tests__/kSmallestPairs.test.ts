import assert from 'power-assert';
import { kSmallestPairs } from '../kSmallestPairs';

describe('src/KSmallestPairs', () => {
  describe('KSmallestPairs', () => {
    it('[1,7,11], [2,4,6], 3', () =>
      assert.deepStrictEqual(kSmallestPairs([1, 7, 11], [2, 4, 6], 3), [
        [1, 2],
        [1, 4],
        [1, 6]
      ]));
    it('[1,1,2], [1,2,3], 2', () =>
      assert.deepStrictEqual(kSmallestPairs([1, 1, 2], [1, 2, 3], 2), [
        [1, 1],
        [1, 1]
      ]));
    it('[1,2], [3], 3', () =>
      assert.deepStrictEqual(kSmallestPairs([1, 2], [3], 3), [
        [1, 3],
        [2, 3]
      ]));
    it('[-10,-4,0,0,6], [3,5,6,7,8,100], 10', () =>
      assert.deepStrictEqual(kSmallestPairs([-10, -4, 0, 0, 6], [3, 5, 6, 7, 8, 100], 10), [
        [-10, 3],
        [-10, 5],
        [-10, 6],
        [-10, 7],
        [-10, 8],
        [-4, 3],
        [-4, 5],
        [-4, 6],
        [0, 3],
        [-4, 7]
      ]));
    it('[0,0,0,0,0,2,2,2,2], [-3,22,35,56,76], 22', () =>
      assert.deepStrictEqual(
        kSmallestPairs([0, 0, 0, 0, 0, 2, 2, 2, 2], [-3, 22, 35, 56, 76], 22),
        [
          [0, -3],
          [0, -3],
          [0, -3],
          [0, -3],
          [0, -3],
          [2, -3],
          [2, -3],
          [2, -3],
          [2, -3],
          [0, 22],
          [0, 22],
          [0, 22],
          [0, 22],
          [0, 22],
          [2, 22],
          [2, 22],
          [2, 22],
          [2, 22],
          [0, 35],
          [0, 35],
          [0, 35],
          [0, 35]
        ]
      ));
  });
});
