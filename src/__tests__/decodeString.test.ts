import assert from 'power-assert';
import { decodeString } from '../decodeString';

describe('src/decodeString', () => {
  describe('decodeString', () => {
    it('3[a]2[bc]', () => assert.strictEqual(decodeString('3[a]2[bc]'), 'aaabcbc'));
    it('3[a2[c]]', () => assert.strictEqual(decodeString('3[a2[c]]'), 'accaccacc'));
    it('2[abc]3[cd]ef', () => assert.strictEqual(decodeString('2[abc]3[cd]ef'), 'abcabccdcdcdef'));
    it('abc3[cd]xyz', () => assert.strictEqual(decodeString('abc3[cd]xyz'), 'abccdcdcdxyz'));
  });
});
