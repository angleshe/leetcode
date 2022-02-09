import assert from 'power-assert';
import { minMoves2 } from '../minMoves2';

describe('src/minMoves2', () => {
  describe('minMove2', () => {
    it('[1,2,3]', () => assert.strictEqual(minMoves2([1, 2, 3]), 2));
  });
});
