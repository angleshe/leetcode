import assert from 'power-assert';
import { countDigitOne } from '../countDigitOne';

describe('src/countDigiOne', () => {
  describe('countDigitOne', () => {
    it('13', () => assert.strictEqual(countDigitOne(13), 6));
    it('0', () => assert.strictEqual(countDigitOne(0), 0));
  });
});
