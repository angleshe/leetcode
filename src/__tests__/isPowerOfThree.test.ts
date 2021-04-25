import assert from 'power-assert';
import { isPowerOfThree } from '../isPowerOfThree';

describe('src/isPowerOfThree', () => {
  describe('isPowerOfThree', () => {
    it('27', () => assert.ok(isPowerOfThree(27)));
    it('0', () => assert.ok(!isPowerOfThree(0)));
    it('9', () => assert.ok(isPowerOfThree(9)));
    it('45', () => assert.ok(!isPowerOfThree(45)));
    it('1', () => assert.ok(isPowerOfThree(1)));
  });
});
