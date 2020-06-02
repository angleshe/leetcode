import assert from 'power-assert';
import { getPermutation } from '../getPermutation';

describe('src/getPermutation', () => {
  describe('getPermutation', () => {
    it('3, 3', () => {
      assert.strictEqual(getPermutation(3, 3), '213');
    });
    it('4, 9', () => {
      assert.strictEqual(getPermutation(4, 9), '2314');
    });
  });
});
