import { divide } from '../divide';
import assert from 'power-assert';
describe('src/divide', () => {
  describe('divide', () => {
    it('10, 3', () => {
      assert.strictEqual(3, divide(10, 3));
    });
    it('5, 2', () => {
      assert.strictEqual(2, divide(5, 2));
    });
    it('7, -3', () => {
      assert.strictEqual(-2, divide(7, -3));
    });
    it('-2147483648, -1', () => {
      assert.strictEqual(2147483647, divide(-2147483648, -1));
    });
    it('-2147483648, 1', () => {
      assert.strictEqual(-2147483648, divide(-2147483648, 1));
    });
    it('-2147483648, 2', () => {
      assert.strictEqual(-1073741824, divide(-2147483648, 2));
    });
  });
});
