import assert from 'power-assert';
import { missingNumber } from '../missingNumber';

describe('src/missingNumber', () => {
  describe('missingNumber', () => {
    it('[3,0,1]', () => assert.strictEqual(missingNumber([3, 0, 1]), 2));
    it('[0,1]', () => assert.strictEqual(missingNumber([0, 1]), 2));
    it('[9,6,4,2,3,5,7,0,1]', () =>
      assert.strictEqual(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8));
    it('[0]', () => assert.strictEqual(missingNumber([0]), 1));
  });
});
