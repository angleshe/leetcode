import assert from 'power-assert';
import { permuteUnique } from '../permuteUnique';

describe('src/permuteUnique', () => {
  describe('permuteUnique', () => {
    it('[1, 1, 2]', () => {
      assert.deepStrictEqual(
        [
          [1, 1, 2],
          [1, 2, 1],
          [2, 1, 1]
        ],
        permuteUnique([1, 1, 2])
      );
    });
  });
});
