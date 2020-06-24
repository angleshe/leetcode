import assert from 'power-assert';
import { sortColors } from '../sortColors';

describe('src/sortColors', () => {
  describe('sortColors', () => {
    const test1: number[] = [2, 0, 2, 1, 1, 0];
    const test2: number[] = [1, 2, 0];
    it(test1.toString(), () => {
      sortColors(test1);
      assert.deepStrictEqual(test1, [0, 0, 1, 1, 2, 2]);
    });
    it(test2.toString(), () => {
      sortColors(test2);
      assert.deepStrictEqual(test2, [0, 1, 2]);
    });
  });
});
