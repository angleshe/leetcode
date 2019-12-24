import assert from 'assert';
import { isValid } from '../isValid';
describe('src/isValid', () => {
  describe('isValid', () => {
    it(' ', () => {
      assert.ok(isValid(''));
    });
    it('()', () => {
      assert.ok(isValid('()'));
    });
    it('()[]{}', () => {
      assert.ok(isValid('()[]{}'));
    });
    it('(]', () => {
      assert.ok(!isValid('(]'));
    });
    it('([)]', () => {
      assert.ok(!isValid('([)]'));
    });
    it('{[]}', () => {
      assert.ok(isValid('{[]}'));
    });
  });
});
