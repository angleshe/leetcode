import assert from 'power-assert';
import { toHex } from '../toHex';

describe('src/toHex', () => {
  describe('toHex', () => {
    it('26', () => assert.strictEqual(toHex(26), '1a'));
    it('-1', () => assert.strictEqual(toHex(-1), 'ffffffff'));
  });
});
