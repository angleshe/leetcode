import assert from 'power-assert';
import { reverseBits } from '../reverseBits';

describe('src/reverseBots', () => {
  describe('reverseBits', () => {
    it('43261596', () => assert.strictEqual(reverseBits(43261596), 964176192));
    it('4294967293', () => assert.strictEqual(reverseBits(4294967293), 3221225471));
    it('0b11111111111111111111111111111101', () =>
      assert.strictEqual(
        reverseBits(0b11111111111111111111111111111101),
        0b10111111111111111111111111111111
      ));
  });
});
