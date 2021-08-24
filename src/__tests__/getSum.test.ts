import assert from 'power-assert';
import { getSum } from '../getSum';

describe('src/getSum', () => {
  describe('getSum', () => {
    it('1, 2', () => assert.strictEqual(getSum(1, 2), 3));
    it('-2, 3', () => assert.strictEqual(getSum(-2, 3), 1));
  });
});
