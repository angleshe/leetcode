import assert from 'power-assert';
import { isSubsequence } from '../isSubsequence';

describe('src/isSubsequence', () => {
  describe('isSubsequence', () => {
    it('abc, ahbgdc', () => assert.ok(isSubsequence('abc', 'ahbgdc')));
    it('axc, ahbgdc', () => assert.ok(!isSubsequence('axc', 'ahbgdc')));
    it(', ahbgdc', () => assert.ok(isSubsequence('', 'ahbgdc')));
  });
});
