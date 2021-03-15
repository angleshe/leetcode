import assert from 'power-assert';
import { NumMatrix } from '../NumMatrix';

describe('src/NumMatrix', () => {
  describe('NumMatrix', () => {
    const numMatrix = new NumMatrix([
      [3, 0, 1, 4, 2],
      [5, 6, 3, 2, 1],
      [1, 2, 0, 1, 5],
      [4, 1, 0, 1, 7],
      [1, 0, 3, 0, 5]
    ]);
    const test1 = numMatrix.sumRegion(2, 1, 4, 3);
    const test2 = numMatrix.sumRegion(1, 1, 2, 2);
    const test3 = numMatrix.sumRegion(1, 2, 2, 4);
    it('2, 1, 4, 3', () => assert.strictEqual(test1, 8));
    it('1, 1, 2, 2', () => assert.strictEqual(test2, 11));
    it('1, 2, 2, 4', () => assert.strictEqual(test3, 12));
  });
});
