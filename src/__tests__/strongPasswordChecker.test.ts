import assert from 'power-assert';
import { strongPasswordChecker } from '../strongPasswordChecker';

describe('src/strongPasswordChecker', () => {
  describe('strongPasswordChecker', () => {
    it('a', () => assert.strictEqual(strongPasswordChecker('a'), 5));
    it('aA1', () => assert.strictEqual(strongPasswordChecker('aA1'), 3));
    it('1337C0d3', () => assert.strictEqual(strongPasswordChecker('1337C0d3'), 0));
    it('aaa111', () => assert.strictEqual(strongPasswordChecker('aaa111'), 2));
    it('bbaaaaaaaaaaaaaaacccccc', () =>
      assert.strictEqual(strongPasswordChecker('bbaaaaaaaaaaaaaaacccccc'), 8));
  });
});
