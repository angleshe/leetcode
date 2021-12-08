import assert from 'power-assert';
import { thirdMax } from '../thirdMax';

describe('src/thirdMax', () => {
  describe('thirdMax', () => {
    it('[3, 2, 1]', () => assert.strictEqual(thirdMax([3, 2, 1]), 1));
    it('[1, 2]', () => assert.strictEqual(thirdMax([1, 2]), 2));
    it('[2, 2, 3, 1]', () => assert.strictEqual(thirdMax([2, 2, 3, 1]), 1));
    it('[1,2,2,5,3,5]', () => assert.strictEqual(thirdMax([1, 2, 2, 5, 3, 5]), 2));
  });
});
