import assert from 'power-assert';
import { nthSuperUglyNumber } from '../nthSuperUglyNumber';

describe('src/nthSuperUglyNumber', () => {
  describe('nthSuperUglyNumber', () => {
    it('12, [2,7,13,19]', () => assert.strictEqual(nthSuperUglyNumber(12, [2, 7, 13, 19]), 32));
  });
});
