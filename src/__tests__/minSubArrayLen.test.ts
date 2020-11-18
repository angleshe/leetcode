import assert from 'power-assert';
import { minSubArrayLen } from '../minSubArrayLen';

describe('src/minSubArrayLen', () => {
  describe('minSubArrayLen', () => {
    it('7, [2,3,1,2,4,3]', () => assert.strictEqual(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), 2));
  });
});
