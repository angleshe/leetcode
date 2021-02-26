import assert from 'power-assert';
import { findDuplicate } from '../findDuplicate';

describe('src/findDuplicate', () => {
  describe('findDuplicate', () => {
    it('[1,3,4,2,2]', () => assert.strictEqual(findDuplicate([1, 3, 4, 2, 2]), 2));
    it('[3,1,3,4,2]', () => assert.strictEqual(findDuplicate([3, 1, 3, 4, 2]), 3));
    it('[1,1]', () => assert.strictEqual(findDuplicate([1, 1]), 1));
    it('[1,1,2]', () => assert.strictEqual(findDuplicate([1, 1, 2]), 1));
  });
});
