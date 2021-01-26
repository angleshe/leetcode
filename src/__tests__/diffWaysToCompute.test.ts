import assert from 'power-assert';
import { diffWaysToCompute } from '../diffWaysToCompute';

describe('src/diffWaysToCompute', () => {
  describe('diffWaysToCompute', () => {
    it('2-1-1', () => assert.deepStrictEqual(diffWaysToCompute('2-1-1'), [2, 0]));
    it('2*3-4*5', () =>
      assert.deepStrictEqual(diffWaysToCompute('2*3-4*5'), [-34, -10, -14, -10, 10]));
  });
});
