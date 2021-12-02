import assert from 'power-assert';
import { numberOfArithmeticSlices } from '../numberOfArithmeticSlices';

describe('src/numberOfArithmeticSlices', () => {
  describe('numberOfArithmeticSlices', () => {
    it('[1,2,3,4]', () => assert.strictEqual(numberOfArithmeticSlices([1, 2, 3, 4]), 3));
    it('[1]', () => assert.strictEqual(numberOfArithmeticSlices([1]), 0));
  });
});
