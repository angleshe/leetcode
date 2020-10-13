import assert from 'power-assert';
import { maximumGap } from '../maximumGap';

describe('src/maximumGap', () => {
  describe('maximumGap', () => {
    it('[3,6,9,1]', () => assert.strictEqual(maximumGap([3, 6, 9, 1]), 3));
    it('[10]', () => assert.strictEqual(maximumGap([10]), 0));
    it('[1,1,1,1]', () => assert.strictEqual(maximumGap([1, 1, 1, 1]), 0));
  });
});
