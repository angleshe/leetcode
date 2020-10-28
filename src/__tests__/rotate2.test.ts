import assert from 'power-assert';
import { rotate } from '../rotate2';

describe('src/rotate2', () => {
  describe('rotate', () => {
    it('[1,2,3,4,5,6,7], 3', () => {
      const test = [1, 2, 3, 4, 5, 6, 7];
      rotate(test, 3);
      assert.deepStrictEqual(test, [5, 6, 7, 1, 2, 3, 4]);
    });
    it('[-1,-100,3,99], 2', () => {
      const test = [-1, -100, 3, 99];
      rotate(test, 2);
      assert.deepStrictEqual(test, [3, 99, -1, -100]);
    });
  });
});
