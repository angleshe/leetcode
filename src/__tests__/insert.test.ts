import assert from 'power-assert';
import { insert } from '../insert';
import { showContent } from '../utils';

describe('src/insert', () => {
  describe('insert', () => {
    it(`${showContent([
      [1, 3],
      [6, 9]
    ])}, [2,5]`, () => {
      assert.deepStrictEqual(
        [
          [1, 5],
          [6, 9]
        ],
        insert(
          [
            [1, 3],
            [6, 9]
          ],
          [2, 5]
        )
      );
    });
    it(`${showContent([
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16]
    ])}, [4,8]`, () => {
      assert.deepStrictEqual(
        [
          [1, 2],
          [3, 10],
          [12, 16]
        ],
        insert(
          [
            [1, 2],
            [3, 5],
            [6, 7],
            [8, 10],
            [12, 16]
          ],
          [4, 8]
        )
      );
    });
  });
});
