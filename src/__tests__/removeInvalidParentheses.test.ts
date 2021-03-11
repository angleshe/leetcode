import assert from 'power-assert';
import { removeInvalidParentheses, isValid } from '../removeInvalidParentheses';

describe('src/removeInvalidParentheses', () => {
  describe('isValid', () => {
    it('(()())()', () => assert.ok(isValid('(()())()')));
    it('(()()()', () => assert.ok(!isValid('(()()()')));
    it('(()()))', () => assert.ok(!isValid('(()()))')));
  });
  describe('removeInvalidParentheses', () => {
    it('()())()', () =>
      assert.deepStrictEqual(removeInvalidParentheses('()())()'), ['(())()', '()()()']));
    it('(a)())()', () =>
      assert.deepStrictEqual(removeInvalidParentheses('(a)())()'), ['(a())()', '(a)()()']));
    it(')(', () => assert.deepStrictEqual(removeInvalidParentheses(')('), ['']));
  });
});
