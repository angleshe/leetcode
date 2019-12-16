import { intToRoman } from '../intToRoman';
import assert from 'assert';

describe('src/intToRoman', () => {
  describe('intToRoman()', () => {
    it('3', () => {
      assert.strictEqual('III', intToRoman(3));
    });
    it('4', () => {
      assert.strictEqual('IV', intToRoman(4));
    });
    it('9', () => {
      assert.strictEqual('IX', intToRoman(9));
    });
    it('58', () => {
      assert.strictEqual('LVIII', intToRoman(58));
    });
    it('1994', () => {
      assert.strictEqual('MCMXCIV', intToRoman(1994));
    });
    it('2', () => {
      assert.strictEqual('II', intToRoman(2));
    });
    it('12', () => {
      assert.strictEqual('XII', intToRoman(12));
    });
    it('27', () => {
      assert.strictEqual('XXVII', intToRoman(27));
    });
  });
});
