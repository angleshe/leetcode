import assert from 'power-assert';
import { countSmaller } from '../countSmaller';

describe('src/countSmaller', () => {
  describe('countSmaller', () => {
    it('[5,2,6,1]', () => assert.deepStrictEqual(countSmaller([5, 2, 6, 1]), [2, 1, 1, 0]));
    it('[5, 2, 6, 6, 1]', () =>
      assert.deepStrictEqual(countSmaller([5, 2, 6, 6, 1]), [2, 1, 1, 1, 0]));
  });
});
