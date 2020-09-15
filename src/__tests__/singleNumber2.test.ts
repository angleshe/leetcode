import assert from 'power-assert';
import { singleNumber } from '../singleNumber2';

describe('src/singleNumber2', () => {
  describe('singleNumber', () => {
    it('[2,2,3,2]', () => assert.strictEqual(singleNumber([2, 2, 3, 2]), 3));
    it('[0,1,0,1,0,1,99]', () => assert.strictEqual(singleNumber([0, 1, 0, 1, 0, 1, 99]), 99));
  });
});
