import assert from 'power-assert';
import { climbStairs } from '../climbStairs';

describe('src/climbStairs', () => {
  describe('climbStairs', () => {
    it('2', () => {
      assert.strictEqual(climbStairs(2), 2);
    });
    it('3', () => {
      assert.strictEqual(climbStairs(3), 3);
    });
  });
});
