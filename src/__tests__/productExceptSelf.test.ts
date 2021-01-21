import assert from 'power-assert';
import { productExceptSelf } from '../productExceptSelf';

describe('src/productExceptSelf', () => {
  describe('productExceptSelf', () => {
    it('[1,2,3,4]', () => assert.deepStrictEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]));
  });
});
