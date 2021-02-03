import assert from 'power-assert';
import { isUgly } from '../isUgly';

describe('src/isUgly', () => {
  describe('isUgly', () => {
    it('6', () => assert.ok(isUgly(6)));
    it('8', () => assert.ok(isUgly(8)));
    it('14', () => assert.ok(!isUgly(14)));
  });
});
