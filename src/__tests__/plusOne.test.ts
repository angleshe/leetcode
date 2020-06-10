import assert from 'power-assert';
import { plusOne } from '../plusOne';

describe('src/plusOne', () => {
  describe('plusOne', () => {
    it('[1, 2, 3]', () => {
      assert.deepStrictEqual(plusOne([1, 2, 3]), [1, 2, 4]);
    });
    it('[4,3,2,1]', () => {
      assert.deepStrictEqual(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
    });
  });
});
