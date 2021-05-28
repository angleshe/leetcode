import assert from 'power-assert';
import { integerBreak } from '../integerBreak';

describe('src/integerBreak', () => {
  describe('integerBreak', () => {
    it('2', () => assert.strictEqual(integerBreak(2), 1));
    it('10', () => assert.strictEqual(integerBreak(10), 36));
  });
});
