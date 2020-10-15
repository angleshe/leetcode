import assert from 'power-assert';
import { fractionToDecimal } from '../fractionToDecimal';

describe('src/fractionToDecimal', () => {
  describe('fractionToDecimal', () => {
    it('1, 2', () => assert.strictEqual(fractionToDecimal(1, 2), '0.5'));
    it('2, 1', () => assert.strictEqual(fractionToDecimal(2, 1), '2'));
    it('2, 3', () => assert.strictEqual(fractionToDecimal(2, 3), '0.(6)'));
  });
});
