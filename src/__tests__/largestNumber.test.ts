import assert from 'power-assert';
import { largestNumber } from '../largestNumber';

describe('src/largestNumber', () => {
  describe('largestNumber', () => {
    it('[10,2]', () => assert.strictEqual(largestNumber([10, 2]), '210'));
    it('[3,30,34,5,9]', () => assert.strictEqual(largestNumber([3, 30, 34, 5, 9]), '9534330'));
    it('[1]', () => assert.strictEqual(largestNumber([1]), '1'));
    it('[10]', () => assert.strictEqual(largestNumber([10]), '10'));
  });
});
