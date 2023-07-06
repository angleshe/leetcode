import { checkSubarraySum } from '../checkSubarraySum';
import assert from 'power-assert';

describe('src/checkSubarraySum', () => {
  describe('checkSubarraySum', () => {
    it('[23,2,4,6,7], 6', () => assert.ok(checkSubarraySum([23, 2, 4, 6, 7], 6)));
    it('[23,2,6,4,7], 6', () => assert.ok(checkSubarraySum([23, 2, 6, 4, 7], 6)));
    it('[23,2,6,4,7], 13', () => assert.ok(!checkSubarraySum([23, 2, 6, 4, 7], 13)));
  });
});
