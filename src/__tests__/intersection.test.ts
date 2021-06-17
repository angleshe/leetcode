import assert from 'power-assert';
import { intersection } from '../intersection';

describe('src/intersection', () => {
  describe('intersection', () => {
    it('[1,2,2,1], [2,2]', () => assert.deepStrictEqual(intersection([1, 2, 2, 1], [2, 2]), [2]));
    it('[4,9,5], [9,4,9,8,4]', () =>
      assert.deepStrictEqual(intersection([4, 9, 5], [9, 4, 9, 8, 4]), [9, 4]));
  });
});
