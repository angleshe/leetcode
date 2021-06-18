import assert from 'power-assert';
import { intersect } from '../intersect';

describe('src/intersect', () => {
  describe('intersect', () => {
    it('[1,2,2,1], [2,2]', () => assert.deepStrictEqual(intersect([1, 2, 2, 1], [2, 2]), [2, 2]));
    it('[4,9,5], [9,4,9,8,4]', () =>
      assert.deepStrictEqual(intersect([4, 9, 5], [9, 4, 9, 8, 4]), [9, 4]));
  });
});
