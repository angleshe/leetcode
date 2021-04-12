import assert from 'power-assert';
import { maxNumber, pickKMaxNumber, mergeArray, maxArray } from '../maxNumber';

describe('src/maxNumber', () => {
  describe('pickKMaxNumber', () => {
    it('[3, 4, 6, 5], 3', () => assert.deepStrictEqual(pickKMaxNumber([3, 4, 6, 5], 3), [4, 6, 5]));
    it('[9, 1, 2, 5, 8, 3], 2', () =>
      assert.deepStrictEqual(pickKMaxNumber([9, 1, 2, 5, 8, 3], 2), [9, 8]));
    it('[6, 7], 2', () => assert.deepStrictEqual(pickKMaxNumber([6, 7], 2), [6, 7]));
    it('[6, 7], 0', () => assert.deepStrictEqual(pickKMaxNumber([6, 7], 0), []));
  });
  describe('mergeArray', () => {
    it('[3, 4, 6, 5], [9, 1, 2, 5, 8, 3]', () =>
      assert.deepStrictEqual(mergeArray([3, 4, 6, 5], [9, 1, 2, 5, 8, 3]), [
        9,
        3,
        4,
        6,
        5,
        1,
        2,
        5,
        8,
        3
      ]));
    it('[6, 7], [6, 0, 4]', () =>
      assert.deepStrictEqual(mergeArray([6, 7], [6, 0, 4]), [6, 7, 6, 0, 4]));
    it('[6, 0, 4], [6, 7]', () =>
      assert.deepStrictEqual(mergeArray([6, 0, 4], [6, 7]), [6, 7, 6, 0, 4]));
  });
  describe('maxArray', () => {
    it('[3, 4, 6, 5], [9, 1, 2, 5, 8, 3]', () =>
      assert.deepStrictEqual(maxArray([3, 4, 6, 5], [9, 1, 2, 5, 8, 3]), [9, 1, 2, 5, 8, 3]));
    it('[3, 4, 6, 5], [3, 4, 6, 1]', () =>
      assert.deepStrictEqual(maxArray([3, 4, 6, 5], [3, 4, 6, 1]), [3, 4, 6, 5]));
  });
  describe('maxNumber', () => {
    it('[3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5', () =>
      assert.deepStrictEqual(maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5), [9, 8, 6, 5, 3]));
    it('[6, 7], [6, 0, 4], 5', () =>
      assert.deepStrictEqual(maxNumber([6, 7], [6, 0, 4], 5), [6, 7, 6, 0, 4]));
    it('[3, 9], [8, 9], 3', () => assert.deepStrictEqual(maxNumber([3, 9], [8, 9], 3), [9, 8, 9]));
  });
});
