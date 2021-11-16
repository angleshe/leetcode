import assert from 'power-assert';
import { removeKdigits } from '../removeKdigits';

describe('src/removeKdigits', () => {
  describe('removeKdigits', () => {
    it('1432219, 3', () => assert.strictEqual(removeKdigits('1432219', 3), '1219'));
    it('10200, 1', () => assert.strictEqual(removeKdigits('10200', 1), '200'));
    it('10, 2', () => assert.strictEqual(removeKdigits('10', 2), '0'));
    it('9, 1', () => assert.strictEqual(removeKdigits('9', 1), '0'));
    it('112, 1', () => assert.strictEqual(removeKdigits('112', 1), '11'));
  });
});
