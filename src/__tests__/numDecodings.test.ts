import assert from 'power-assert';
import { numDecodings } from '../numDecodings';

describe('src/numDecodings', () => {
  describe('numDecodings', () => {
    it('12', () => {
      assert.strictEqual(numDecodings('12'), 2);
    });
    it('226', () => {
      assert.strictEqual(numDecodings('226'), 3);
    });
    it('0', () => {
      assert.strictEqual(numDecodings('0'), 0);
    });
    it('10', () => {
      assert.strictEqual(numDecodings('10'), 1);
    });
    it('012', () => {
      assert.strictEqual(numDecodings('012'), 0);
    });
    it('100', () => {
      assert.strictEqual(numDecodings('100'), 0);
    });
    it('110', () => {
      assert.strictEqual(numDecodings('110'), 1);
    });
    it('1212', () => {
      assert.strictEqual(numDecodings('1212'), 5);
    });
  });
});
