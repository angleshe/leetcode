import assert from 'power-assert';
import { countNumbersWithUniqueDigits } from '../countNumbersWithUniqueDigits';

describe('src/countNumbersWithUniqueDigits', () => {
  describe('countNumbersWithUniqueDigits', () => {
    it('2', () => assert.strictEqual(countNumbersWithUniqueDigits(2), 91));
    it('3', () => assert.strictEqual(countNumbersWithUniqueDigits(3), 739));
  });
});
