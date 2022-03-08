import assert from 'power-assert';
import { reversePairs } from '../reversePairs';

describe('src/reversePairs', () => {
  describe('reversePairs', () => {
    it('[1,3,2,3,1]', () => assert.strictEqual(reversePairs([1, 3, 2, 3, 1]), 2));
    it('[2,4,3,5,1]', () => assert.strictEqual(reversePairs([2, 4, 3, 5, 1]), 3));
  });
});
