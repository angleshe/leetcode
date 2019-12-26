import assert from 'assert';
import { generateParenthesis } from '../generateParenthesis';
describe('src/generateParenthesis', () => {
  describe('generateParenthesis', () => {
    it('3', () => {
      assert.deepStrictEqual(
        ['()()()', '()(())', '(())()', '(()())', '((()))'],
        generateParenthesis(3)
      );
    });
  });
});
