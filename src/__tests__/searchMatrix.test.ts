import assert from 'power-assert';
import { searchMatrix } from '../searchMatrix';
import { showContent } from '../utils';

describe('src/searchMatrix', () => {
  describe('searchMatrix', () => {
    it(`${showContent([
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50]
    ])}, 3`, () => {
      assert.ok(
        searchMatrix(
          [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 50]
          ],
          3
        )
      );
    });
    it(`${showContent([
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50]
    ])}, 13`, () => {
      assert.ok(
        !searchMatrix(
          [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 50]
          ],
          13
        )
      );
    });
  });
});
