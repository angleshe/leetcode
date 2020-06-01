import assert from 'power-assert';
import { generateMatrix } from '../generateMatrix';

describe('src/generateMatrix', () => {
  describe('generateMatrix', () => {
    it('3', () => {
      assert.deepStrictEqual(generateMatrix(3), [
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]
      ]);
    });
  });
});
