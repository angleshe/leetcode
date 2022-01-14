import assert from 'power-assert';
import { numberOfArithmeticSlices } from '../numberOfArithmeticSlices2';

describe('src/numberOfArithmeticSlices2', () => {
  describe('numberOfArithmeticSlices', () => {
    it('[2,4,6,8,10]', () => assert.strictEqual(numberOfArithmeticSlices([2, 4, 6, 8, 10]), 7));
    it('[2,4,6,8,10]', () => assert.strictEqual(numberOfArithmeticSlices([7, 7, 7, 7, 7]), 16));
  });
});
