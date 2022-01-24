import assert from 'power-assert';
import { fourSumCount } from '../fourSumCount';

describe('src/fourSumCount', () => {
  describe('fourSumCount', () => {
    it('[1,2],[-2,-1],[-1,2],[0,2]', () =>
      assert.strictEqual(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]), 2));
    it('[0],[0],[0],[0]', () => assert.strictEqual(fourSumCount([0], [0], [0], [0]), 1));
  });
});
