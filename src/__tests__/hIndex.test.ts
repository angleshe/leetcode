import assert from 'power-assert';
import { hIndex } from '../hIndex';

describe('src/hIndex', () => {
  describe('hIndex', () => {
    it('[3,0,6,1,5]', () => assert.strictEqual(hIndex([3, 0, 6, 1, 5]), 3));
    it('[0]', () => assert.strictEqual(hIndex([0]), 0));
  });
});
