import { countAndSay } from '../countAndSay';
import assert from 'power-assert';
describe('src/countAndSay', () => {
  describe('countAndSay', () => {
    it('1', () => {
      assert.strictEqual('1', countAndSay(1));
    });
    it('4', () => {
      assert.strictEqual('1211', countAndSay(4));
    });
  });
});
