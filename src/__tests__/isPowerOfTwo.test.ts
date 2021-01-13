import assert from 'power-assert';
import { isPowerOfTwo } from '../isPowerOfTwo';

describe('src/isPowerOfTwo', () => {
  describe('isPowerOfTwo', () => {
    it('1', () => assert.ok(isPowerOfTwo(1)));
    it('16', () => assert.ok(isPowerOfTwo(16)));
    it('218', () => assert.ok(!isPowerOfTwo(218)));
  });
});
