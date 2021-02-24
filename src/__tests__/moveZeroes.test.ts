import assert from 'power-assert';
import { moveZeroes } from '../moveZeroes';

describe('src/moveZeroes', () => {
  describe('moveZeroes', () => {
    const test1 = [0, 1, 0, 3, 12];
    it(JSON.stringify(test1), () => {
      moveZeroes(test1);
      assert.deepStrictEqual(test1, [1, 3, 12, 0, 0]);
    });
  });
});
