import assert from 'power-assert';
import { getMoneyAmount } from '../getMoneyAmount';

describe('src/getMoneyAmount', () => {
  describe('getMoneyAmount', () => {
    it('10', () => assert.strictEqual(getMoneyAmount(10), 16));
  });
});
