import { reverse } from '../reverse';
import assert from 'assert';

describe('src/reverse', () => {
  describe('reverse()', () => {
    it('123', () => {
      assert.strictEqual(reverse(123), 321);
    });
    it('-123', () => {
      assert.strictEqual(reverse(-123), -321);
    });
    it('120', () => {
      assert.strictEqual(reverse(120), 21);
    });
    it('0', () => {
      assert.strictEqual(reverse(0), 0);
    });
    it('1534236469', () => {
      assert.strictEqual(reverse(1534236469), 0);
    });
  });
});
