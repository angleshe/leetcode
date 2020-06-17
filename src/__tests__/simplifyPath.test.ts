import assert from 'power-assert';
import { simplifyPath } from '../simplifyPath';

describe('src/simplifyPath', () => {
  describe('simplifyPath', () => {
    it('/home/', () => {
      assert.strictEqual(simplifyPath('/home/'), '/home');
    });
    it('/../', () => {
      assert.strictEqual(simplifyPath('/../'), '/');
    });
    it('/home//foo/', () => {
      assert.strictEqual(simplifyPath('/home//foo/'), '/home/foo');
    });
    it('/a/./b/../../c/', () => {
      assert.strictEqual(simplifyPath('/a/./b/../../c/'), '/c');
    });
    it('/a/../../b/../c//.//', () => {
      assert.strictEqual(simplifyPath('/a/../../b/../c//.//'), '/c');
    });
    it('/a//b////c/d//././/..', () => {
      assert.strictEqual(simplifyPath('/a//b////c/d//././/..'), '/a/b/c');
    });
  });
});
