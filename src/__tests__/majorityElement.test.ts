import assert from 'power-assert';
import { majorityElement } from '../majorityElement';

describe('src/majorityElement', () => {
  describe('majorityElement', () => {
    it('[3,2,3]', () => assert.strictEqual(majorityElement([3, 2, 3]), 3));
    it('[2,2,1,1,1,2,2]', () => assert.strictEqual(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2));
    it('[3,3,4]', () => assert.strictEqual(majorityElement([3, 3, 4]), 3));
  });
});
