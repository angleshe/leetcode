import assert from 'power-assert';
import { findMin } from '../findMin';

describe('src/findMin', () => {
  describe('findMin', () => {
    it('[3,4,5,1,2]', () => assert.strictEqual(findMin([3, 4, 5, 1, 2]), 1));
    it('[4,5,6,7,0,1,2]', () => assert.strictEqual(findMin([4, 5, 6, 7, 0, 1, 2]), 0));
  });
});
