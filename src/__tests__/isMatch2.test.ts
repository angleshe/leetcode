import assert from 'power-assert';
import { isMatch } from '../isMatch2';

describe('src/isMatch2', () => {
  describe('isMatch', () => {
    it('aa, a', () => {
      assert.ok(!isMatch('aa', 'a'));
    });
    it('aa, *', () => {
      assert.ok(isMatch('aa', '*'));
    });
    it('cb, ?a', () => {
      assert.ok(!isMatch('cb', '?a'));
    });
    it('adceb, *a*b', () => {
      assert.ok(isMatch('adceb', '*a*b'));
    });
    it('acdcb, a*c?b', () => {
      assert.ok(!isMatch('acdcb', 'a*c?b'));
    });
    it('aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba, a*******b', () => {
      assert.ok(!isMatch('aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba', 'a*******b'));
    });
    it('babbbbaabababaabbababaababaabbaabababbaaababbababaaaaaabbabaaaabababbabbababbbaaaababbbabbbbbbbbbbaabbb, b**bb**a**bba*b**a*bbb**aba***babbb*aa****aabb*bbb***a', () => {
      assert.ok(
        !isMatch(
          'babbbbaabababaabbababaababaabbaabababbaaababbababaaaaaabbabaaaabababbabbababbbaaaababbbabbbbbbbbbbaabbb',
          'b**bb**a**bba*b**a*bbb**aba***babbb*aa****aabb*bbb***a'
        )
      );
    });
    it('abb, c*a*b', () => {
      assert.ok(!isMatch('abb', 'c*a*b'));
    });
  });
});
