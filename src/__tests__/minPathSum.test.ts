import assert from 'power-assert';
import { minPathSum } from '../minPathSum';
import { showContent } from '../utils';

describe('src/minPathSum', () => {
  describe('minPathSum', () => {
    it(
      showContent([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
      ]),
      () => {
        assert.strictEqual(
          minPathSum([
            [1, 3, 1],
            [1, 5, 1],
            [4, 2, 1]
          ]),
          7
        );
      }
    );
  });
});
