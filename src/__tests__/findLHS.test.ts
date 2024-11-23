import { findLHS } from '../findLHS';
import assert from 'power-assert';

describe('src/findLHS', () => {
  describe('findLHS', () => {
    it('[1,3,2,2,5,2,3,7]', () => assert.equal(findLHS([1, 3, 2, 2, 5, 2, 3, 7]), 5));
    it('[1,3,2,2,5,2,3,7]', () => assert.equal(findLHS([1, 2, 3, 4]), 2));
    it('[1,3,2,2,5,2,3,7]', () => assert.equal(findLHS([1, 1, 1, 1]), 0));
  });
});
