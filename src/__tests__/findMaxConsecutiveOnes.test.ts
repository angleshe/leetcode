import assert from 'power-assert';
import { findMaxConsecutiveOnes } from '../findMaxConsecutiveOnes';

describe('src/findMaxConsecutiveOnes', () => {
  describe('findMaxConsecutiveOnes', () => {
    it('[1,1,0,1,1,1]', () => assert.strictEqual(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 3));
    it('[1,0,1,1,0,1]', () => assert.strictEqual(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]), 2));
  });
});
