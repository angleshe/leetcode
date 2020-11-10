import assert from 'power-assert';
import { countPrimes } from '../countPrimes';

describe('src/countPrimes', () => {
  describe('countPrimes', () => {
    it('10', () => assert.strictEqual(countPrimes(10), 4));
    it('0', () => assert.strictEqual(countPrimes(0), 0));
    it('1', () => assert.strictEqual(countPrimes(1), 0));
  });
});
