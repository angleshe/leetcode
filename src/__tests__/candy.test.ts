import assert from 'power-assert';
import { candy } from '../candy';

describe('src/candy', () => {
  describe('candy', () => {
    it('[1,0,2]', () => assert.strictEqual(candy([1, 0, 2]), 5));
    it('[1,2,2]', () => assert.strictEqual(candy([1, 2, 2]), 4));
  });
});
