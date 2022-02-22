import assert from 'power-assert';
import { totalHammingDistance } from '../totalHammingDistance';

describe('src/totalHammingDistance', () => {
  describe('totalHammingDistance', () => {
    it('[4,14,2]', () => assert.strictEqual(totalHammingDistance([4, 14, 2]), 6));
    it('[4,14,4]', () => assert.strictEqual(totalHammingDistance([4, 14, 4]), 4));
  });
});
