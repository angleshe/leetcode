import assert from 'power-assert';
import { permute } from '../permute';

describe('src/permute', () => {
  describe('permute', () => {
    it('[1, 2, 3]', () => {
      assert.deepStrictEqual(
        [
          [1, 2, 3],
          [1, 3, 2],
          [2, 1, 3],
          [2, 3, 1],
          [3, 1, 2],
          [3, 2, 1]
        ],
        permute([1, 2, 3])
      );
    });
  });
});
