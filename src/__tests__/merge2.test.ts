import assert from 'power-assert';
import { merge } from '../merge2';
import { showContent } from '../utils';

describe('src/merge2', () => {
  describe('merge', () => {
    const test1: number[] = [1, 2, 3, 0, 0, 0];
    const test2: number[] = [1, 2, 3, 0, 0, 0];
    it(`${showContent(test1)}, 3, [2,5,6], 3`, () => {
      merge(test1, 3, [2, 5, 6], 3);
      assert.deepStrictEqual(test1, [1, 2, 2, 3, 5, 6]);
    });
    it(`${showContent(test2)}, 3, [-3,-2,5,6], 3`, () => {
      merge(test2, 3, [-3, -2, 5, 6], 3);
      assert.deepStrictEqual(test2, [-3, -2, 1, 2, 3, 5]);
    });
  });
});
