import assert from 'power-assert';
import { evalRPN } from '../evalRPN';

describe('src/evalPRN', () => {
  describe('evalRPN', () => {
    it('["2", "1", "+", "3", "*"]', () => {
      assert.strictEqual(evalRPN(['2', '1', '+', '3', '*']), 9);
    });
    it('["4", "13", "5", "/", "+"]', () => {
      assert.strictEqual(evalRPN(['4', '13', '5', '/', '+']), 6);
    });
    it('["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]', () => {
      assert.strictEqual(
        evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']),
        22
      );
    });
    it('["18"]', () => {
      assert.strictEqual(evalRPN(['18']), 18);
    });
  });
});
