import assert from 'power-assert';
import { isInterleave } from '../isInterleave';

describe('src/isInterleave', () => {
  describe('isInterleave', () => {
    it('aabcc, dbbca, aadbbcbcac', () => {
      assert.ok(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
    });
    it('aabcc, dbbca, aadbbbaccc', () => {
      assert.ok(!isInterleave('aabcc', 'dbbca', 'aadbbbaccc'));
    });
  });
});
