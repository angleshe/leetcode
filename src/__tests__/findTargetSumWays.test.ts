import assert from 'power-assert';
import { findTargetSumWays } from '../findTargetSumWays';

describe('src/findTargetSumWays', () => {
  describe('findTargetSumWays', () => {
    it('[1,1,1,1,1], 3', () => assert.strictEqual(findTargetSumWays([1, 1, 1, 1, 1], 3), 5));
    it('[1], 1', () => assert.strictEqual(findTargetSumWays([1], 1), 1));
  });
});
