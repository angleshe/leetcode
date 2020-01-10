import { longestValidParentheses } from '../longestValidParentheses';
import assert from 'power-assert';
describe('src/longestValidParentheses', () => {
  describe('longestValidParentheses', () => {
    it('(()', () => {
      assert.strictEqual(2, longestValidParentheses('(()'));
    });
    it(')()())', () => {
      assert.strictEqual(4, longestValidParentheses(')()())'));
    });
    it('()', () => {
      assert.strictEqual(2, longestValidParentheses('()'));
    });
    it('', () => {
      assert.strictEqual(0, longestValidParentheses(''));
    });
    it('())', () => {
      assert.strictEqual(2, longestValidParentheses('())'));
    });
    it('(()())', () => {
      assert.strictEqual(6, longestValidParentheses('(()())'));
    });
    it(')()())()()(', () => {
      assert.strictEqual(4, longestValidParentheses(')()())()()('));
    });
  });
});
