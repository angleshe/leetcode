import assert from 'power-assert';
import { hammingWeight } from '../hammingWeight';

describe('src/hammingWeight', () => {
  describe('hammingWeight', () => {
    it('0b00000000000000000000000000001011', () =>
      assert.strictEqual(hammingWeight(0b00000000000000000000000000001011), 3));
    it('0b00000000000000000000000010000000', () =>
      assert.strictEqual(hammingWeight(0b00000000000000000000000010000000), 1));
    it('0b11111111111111111111111111111101', () =>
      assert.strictEqual(hammingWeight(0b11111111111111111111111111111101), 31));
  });
});
