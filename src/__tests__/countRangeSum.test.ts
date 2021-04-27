import assert from 'power-assert';
import { countRangeSum } from '../countRangeSum';

describe('src/countRangeSum', () => {
  describe('countRangeSum', () => {
    it('[-2,5,-1], -2, 2', () => assert.strictEqual(countRangeSum([-2, 5, -1], -2, 2), 3));
    it('[0], 0, 0', () => assert.strictEqual(countRangeSum([0], 0, 0), 1));
  });
});
