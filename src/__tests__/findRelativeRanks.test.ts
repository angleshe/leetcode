import assert from 'power-assert';
import { findRelativeRanks } from '../findRelativeRanks';

describe('src/findRelativeRanks', () => {
  describe('findRelativeRanks', () => {
    it('[5,4,3,2,1]', () =>
      assert.deepStrictEqual(findRelativeRanks([5, 4, 3, 2, 1]), [
        'Gold Medal',
        'Silver Medal',
        'Bronze Medal',
        '4',
        '5'
      ]));
    it('[10,3,8,9,4]', () =>
      assert.deepStrictEqual(findRelativeRanks([10, 3, 8, 9, 4]), [
        'Gold Medal',
        '5',
        'Bronze Medal',
        'Silver Medal',
        '4'
      ]));
  });
});
