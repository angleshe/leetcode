import assert from 'power-assert';
import { maxProduct } from '../maxProduct';

describe('src/maxProduct', () => {
  describe('maxProduct', () => {
    it('[2,3,-2,4]', () => assert.strictEqual(maxProduct([2, 3, -2, 4]), 6));
    it('[-2,0,-1]', () => assert.strictEqual(maxProduct([-2, 0, -1]), 0));
  });
});
