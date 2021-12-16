import assert from 'power-assert';
import { findMaximumXOR } from '../findMaximumXOR';

describe('src/findMaximumXOR', () => {
  describe('findMaximumXOR', () => {
    it('[3,10,5,25,2,8]', () => assert.strictEqual(findMaximumXOR([3, 10, 5, 25, 2, 8]), 28));
    it('[0]', () => assert.strictEqual(findMaximumXOR([0]), 0));
    it('[2,4]', () => assert.strictEqual(findMaximumXOR([2, 4]), 6));
    it('[8,10,2]', () => assert.strictEqual(findMaximumXOR([8, 10, 2]), 10));
    it('[14,70,53,83,49,91,36,80,92,51,66,70]', () =>
      assert.strictEqual(findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]), 127));
  });
});
