import assert from 'power-assert';
import { isHappy, bitSquareSum } from '../isHappy';

describe('src/isHappy', () => {
  describe('bitSquareSum', () => {
    it('19', () => assert.strictEqual(bitSquareSum(19), 82));
  });
  describe('isHappy', () => {
    it('19', () => assert.ok(isHappy(19)));
  });
});
