import assert from 'power-assert';
import { maximalSquare } from '../maximalSquare';

describe('src/maximalSquare', () => {
  describe('maximalSquare', () => {
    it('[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]', () =>
      assert.strictEqual(
        maximalSquare([
          ['1', '0', '1', '0', '0'],
          ['1', '0', '1', '1', '1'],
          ['1', '1', '1', '1', '1'],
          ['1', '0', '0', '1', '0']
        ]),
        4
      ));
    it('[["0","1"],["1","0"]]', () =>
      assert.strictEqual(
        maximalSquare([
          ['0', '1'],
          ['1', '0']
        ]),
        1
      ));
    it('[["0"]]', () => assert.strictEqual(maximalSquare([['0']]), 0));
  });
});
