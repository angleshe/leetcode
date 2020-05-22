import assert from 'power-assert';
import { myPow } from '../myPow';

describe('src/myPow', () => {
  describe('myPow', () => {
    it('2.0, 10', () => {
      assert.strictEqual(Math.pow(2.0, 10), myPow(2.0, 10));
    });
    it('2.1, 3', () => {
      assert.strictEqual(Math.pow(2.1, 3), myPow(2.1, 3));
    });
    it('2.0, -2', () => {
      assert.strictEqual(Math.pow(2.0, -2), myPow(2.0, -2));
    });
  });
});
