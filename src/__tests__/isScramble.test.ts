import assert from 'power-assert';
import { isScramble } from '../isScramble';

describe('src/isScramble', () => {
  describe('isScramble', () => {
    it('great, rgeat', () => {
      assert.ok(isScramble('great', 'rgeat'));
    });
    it('abcde, caebd', () => {
      assert.ok(!isScramble('abcde', 'caebd'));
    });
  });
});
