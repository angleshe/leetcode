import assert from 'power-assert';
import { singleNumber } from '../singleNumber';

describe('src/singleNumber', () => {
  describe('singleNumber', () => {
    it('[2,2,1]', () => assert.strictEqual(singleNumber([2, 2, 1]), 1));
    it('[4,1,2,1,2]', () => assert.strictEqual(singleNumber([4, 1, 2, 1, 2]), 4));
  });
});
