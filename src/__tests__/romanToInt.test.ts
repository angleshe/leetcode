import { romanToInt } from '../romanToInt';
import assert from 'assert';

describe('src/romanToInt', () => {
  describe('ronamToInt()', () => {
    it('III', () => {
      assert.strictEqual(3, romanToInt('III'));
    });
    it('IV', () => {
      assert.strictEqual(4, romanToInt('IV'));
    });
    it('IX', () => {
      assert.strictEqual(9, romanToInt('IX'));
    });
    it('LVIII', () => {
      assert.strictEqual(58, romanToInt('LVIII'));
    });
    it('MCMXCIV', () => {
      assert.strictEqual(1994, romanToInt('MCMXCIV'));
    });
    it('II', () => {
      assert.strictEqual(2, romanToInt('II'));
    });
    it('XII', () => {
      assert.strictEqual(12, romanToInt('XII'));
    });
    it('XXVII', () => {
      assert.strictEqual(27, romanToInt('XXVII'));
    });
  });
});
