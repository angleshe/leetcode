import assert from 'power-assert';
import { trailingZeroes } from '../trailingZeroes';

describe('src/trailingZeroes', () => {
  describe('trailingZeroes', () => {
    it('3', () => assert.strictEqual(trailingZeroes(3), 0));
    it('5', () => assert.strictEqual(trailingZeroes(5), 1));
  });
});
