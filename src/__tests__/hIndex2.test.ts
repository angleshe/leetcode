import assert from 'power-assert';
import { hIndex } from '../hIndex2';

describe('src/hIndex2', () => {
  describe('hIndex', () => {
    it('[0,1,3,5,6]', () => assert.strictEqual(hIndex([0, 1, 3, 5, 6]), 3));
    it('[]', () => assert.strictEqual(hIndex([]), 0));
    it('[1,1,3]', () => assert.strictEqual(hIndex([1, 1, 3]), 1));
  });
});
