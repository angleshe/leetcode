import assert from 'power-assert';
import { wiggleMaxLength } from '../wiggleMaxLength';

describe('src/wiggleMaxLength', () => {
  describe('wiggleMaxLength', () => {
    it('[1,7,4,9,2,5]', () => assert.strictEqual(wiggleMaxLength([1, 7, 4, 9, 2, 5]), 6));
    it('[1,17,5,10,13,15,10,5,16,8]', () =>
      assert.strictEqual(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]), 7));
    it('[1,2,3,4,5,6,7,8,9]', () =>
      assert.strictEqual(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]), 2));
  });
});
