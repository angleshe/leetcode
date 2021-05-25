import assert from 'power-assert';
import { countBits } from '../countBits';

describe('src/countBits', () => {
  describe('countBits', () => {
    it('2', () => assert.deepStrictEqual(countBits(2), [0, 1, 1]));
    it('5', () => assert.deepStrictEqual(countBits(5), [0, 1, 1, 2, 1, 2]));
  });
});
