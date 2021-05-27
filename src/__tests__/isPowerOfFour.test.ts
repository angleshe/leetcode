import assert from 'power-assert';
import { isPowerOfFour } from '../isPowerOfFour';

describe('src/isPowerOfFour', () => {
  describe('isPowerOfFour', () => {
    it('16', () => assert.ok(isPowerOfFour(16)));
    it('5', () => assert.ok(!isPowerOfFour(5)));
    it('1', () => assert.ok(isPowerOfFour(1)));
  });
});
