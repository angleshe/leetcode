import { strStr } from '../strStr';
import assert from 'power-assert';
describe('src/strStr', () => {
  describe('strStr', () => {
    it('hello, ll', () => {
      assert.strictEqual(2, strStr('hello', 'll'));
    });
    it('aaaaa, bba', () => {
      assert.strictEqual(-1, strStr('aaaaa', 'bba'));
    });
    it('assccsc, ', () => {
      assert.strictEqual(0, strStr('assccsc', ''));
    });
  });
});
