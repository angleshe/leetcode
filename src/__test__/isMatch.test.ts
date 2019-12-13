import { isMatch } from '../isMatch';
import assert from 'assert';
describe('src/isMatch', () => {
  describe('isMatch()', () => {
    it('aa, a', () => {
      assert.ok(!isMatch('aa', 'a'));
    });

    it('aa, a*', () => {
      assert.ok(isMatch('aa', 'a*'));
    });

    it('ab, .*', () => {
      assert.ok(isMatch('ab', '.*'));
    });

    it('aab, c*a*b', () => {
      assert.ok(isMatch('aab', 'c*a*b'));
    });

    it('mississippi, mis*is*p*.', () => {
      assert.ok(!isMatch('mississippi', 'mis*is*p*.'));
    });

    it(' , .*', () => {
      assert.ok(isMatch('', '.*'));
    });

    it(' , ', () => {
      assert.ok(isMatch('', ''));
    });
    it('ab, .*c', () => {
      assert.ok(!isMatch('ab', '.*c'));
    });
  });
});
