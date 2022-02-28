import assert from 'power-assert';
import { smallestGoodBase } from '../smallestGoodBase';

describe('src/smallestGoodBase', () => {
  describe('smallestGoodBase', () => {
    it('13', () => assert.strictEqual(smallestGoodBase('13'), '3'));
    it('4681', () => assert.strictEqual(smallestGoodBase('4681'), '8'));
    it('1000000000000000000', () =>
      assert.strictEqual(smallestGoodBase('1000000000000000000'), '999999999999999999'));
  });
});
