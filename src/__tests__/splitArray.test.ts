import assert from 'power-assert';
import { splitArray } from '../splitArray';

describe('src/splitArray', () => {
  describe('splitArray', () => {
    it('[7,2,5,10,8], 2', () => assert.strictEqual(splitArray([7, 2, 5, 10, 8], 2), 18));
    it('[1,2,3,4,5], 2', () => assert.strictEqual(splitArray([1, 2, 3, 4, 5], 2), 9));
    it('[1,4,4], 3', () => assert.strictEqual(splitArray([1, 4, 4], 3), 4));
  });
});
