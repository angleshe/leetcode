import assert from 'power-assert';
import { getHint } from '../getHint';

describe('src/getHint', () => {
  describe('getHint', () => {
    it('1807, 7810', () => assert.strictEqual(getHint('1807', '7810'), '1A3B'));
    it('1123, 0111', () => assert.strictEqual(getHint('1123', '0111'), '1A1B'));
  });
});
