import assert from 'power-assert';
import { findMinMoves } from '../findMinMoves';

describe('src/findMinMoves', () => {
  describe('findMinMoves', () => {
    it('[1, 0, 5]', () => assert.equal(findMinMoves([1, 0, 5]), 3));
    it('[0,3,0]', () => assert.equal(findMinMoves([0, 3, 0]), 2));
    it('[0,2,0]', () => assert.equal(findMinMoves([0, 2, 0]), -1));
  });
});
