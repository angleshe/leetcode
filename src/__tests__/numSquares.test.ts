import assert from 'power-assert';
import { numSquares } from '../numSquares';

describe('src/numSquares', () => {
  describe('numSquares', () => {
    it('12', () => assert.strictEqual(numSquares(12), 3));
    it('13', () => assert.strictEqual(numSquares(13), 2));
  });
});
