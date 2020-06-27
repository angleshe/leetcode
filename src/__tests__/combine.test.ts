import assert from 'power-assert';
import { combine } from '../combine';

describe('src/combine', () => {
  describe('combine', () => {
    it('4, 2', () => {
      assert.deepStrictEqual(combine(4, 2), [
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4]
      ]);
    });
  });
});
