import assert from 'power-assert';
import { singleNumber } from '../singleNumber3';

describe('src/singleNumber3', () => {
  describe('singleNumber', () => {
    it('[1,2,1,3,2,5]', () => assert.deepStrictEqual(singleNumber([1, 2, 1, 3, 2, 5]), [3, 5]));
  });
});
