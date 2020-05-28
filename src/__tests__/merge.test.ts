import assert from 'power-assert';
import { merge } from '../merge';
import { showContent } from '../utils';

describe('src/merge', () => {
  describe('merge', () => {
    it(
      showContent([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18]
      ]),
      () => {
        assert.deepStrictEqual(
          [
            [1, 6],
            [8, 10],
            [15, 18]
          ],
          merge([
            [1, 3],
            [2, 6],
            [8, 10],
            [15, 18]
          ])
        );
      }
    );
    it(
      showContent([
        [1, 4],
        [4, 5]
      ]),
      () => {
        assert.deepStrictEqual(
          [[1, 5]],
          merge([
            [1, 4],
            [4, 5]
          ])
        );
      }
    );
    it(
      showContent([
        [1, 4],
        [0, 0]
      ]),
      () => {
        assert.deepStrictEqual(
          [
            [0, 0],
            [1, 4]
          ],
          merge([
            [1, 4],
            [0, 0]
          ])
        );
      }
    );
  });
  it(
    showContent([
      [2, 3],
      [4, 6],
      [5, 7],
      [3, 4]
    ]),
    () => {
      assert.deepStrictEqual(
        [[2, 7]],
        merge([
          [2, 3],
          [4, 6],
          [5, 7],
          [3, 4]
        ])
      );
    }
  );
});
