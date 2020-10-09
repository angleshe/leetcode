import assert from 'power-assert';
import { findMin } from '../findMin2';

describe('src/findMin2', () => {
  describe('findMin', () => {
    it('[1,3,5]', () => assert.strictEqual(findMin([1, 3, 5]), 1));
    it('[2,2,2,0,1]', () => assert.strictEqual(findMin([2, 2, 2, 0, 1]), 0));
  });
});
