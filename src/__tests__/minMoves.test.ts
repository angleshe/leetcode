import assert from 'power-assert';
import { minMoves } from '../minMoves';

describe('src/minMoves', () => {
  describe('minMoves', () => {
    it('[1,2,3]', () => assert.strictEqual(minMoves([1, 2, 3]), 3));
    it('[1,2,3]', () => assert.strictEqual(minMoves([1, 1, 1]), 0));
  });
});
