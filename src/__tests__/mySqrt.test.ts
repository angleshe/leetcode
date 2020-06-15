import assert from 'power-assert';
import { mySqrt } from '../mySqrt';

describe('src/mySqrt', () => {
  describe('mySqrt', () => {
    it('4', () => {
      assert.strictEqual(mySqrt(4), 2);
    });
    it('8', () => {
      assert.strictEqual(mySqrt(8), 2);
    });
    it('1', () => {
      assert.strictEqual(mySqrt(1), 1);
    });
    it('2', () => {
      assert.strictEqual(mySqrt(2), 1);
    });
  });
});
