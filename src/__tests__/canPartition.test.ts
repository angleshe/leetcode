import assert from 'power-assert';
import { canPartition } from '../canPartition';

describe('src/canPartition', () => {
  describe('canPartition', () => {
    it('[1,5,11,5]', () => assert.ok(canPartition([1, 5, 11, 5])));
    it('[1,2,3,5]', () => assert.ok(!canPartition([1, 2, 3, 5])));
    it('[1,2,5]', () => assert.ok(!canPartition([1, 2, 5])));
    it('[2,2,3,5]', () => assert.ok(!canPartition([2, 2, 3, 5])));
  });
});
