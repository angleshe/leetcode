import assert from 'power-assert';
import { uniquePathsWithObstacles } from '../uniquePathsWithObstacles';
import { showContent } from '../utils';

describe('src/uniquePathsWithObstacles', () => {
  describe('uniquePathsWithObstacles', () => {
    it(
      showContent([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ]),
      () => {
        assert.strictEqual(
          uniquePathsWithObstacles([
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
          ]),
          2
        );
      }
    );
    it(showContent([[1, 0]]), () => {
      assert.strictEqual(uniquePathsWithObstacles([[1, 0]]), 0);
    });
  });
});
