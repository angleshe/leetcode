import assert from 'power-assert';
import { lexicalOrder } from '../lexicalOrder';

describe('src/lexicalOrder', () => {
  describe('lexicalOrder', () => {
    it('13', () =>
      assert.deepStrictEqual(lexicalOrder(13), [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]));
    it('2', () => assert.deepStrictEqual(lexicalOrder(2), [1, 2]));
  });
});
