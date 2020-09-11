import assert from 'power-assert';
import { canCompleteCircuit } from '../canCompleteCircuit';

describe('src/canCompleteCircuit', () => {
  describe('canCompleteCircuit', () => {
    it('[1,2,3,4,5], [3,4,5,1,2]', () =>
      assert.strictEqual(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]), 3));
    it('[2,3,4], [3,4,3]', () => assert.strictEqual(canCompleteCircuit([2, 3, 4], [3, 4, 3]), -1));
  });
});
