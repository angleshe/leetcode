import assert from 'power-assert';
import { Solution } from '../SolutionClass2';

describe('src/SolutionClass2', () => {
  describe('Solution', () => {
    const solution = new Solution([1, 2, 3]);
    const test1 = solution.shuffle();
    const test2 = solution.reset();
    const test3 = solution.shuffle();
    it('test1', () => assert.strictEqual(test1.length, 3));
    it('test2', () => assert.deepStrictEqual(test2, [1, 2, 3]));
    it('test3', () => assert.strictEqual(test3.length, 3));
  });
});
