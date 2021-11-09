import assert from 'power-assert';
import { Solution } from '../Solution2';

describe('src/Solution2', () => {
  describe('Solution', () => {
    const solution = new Solution([1, 2, 3, 3, 3]);
    const test1 = solution.pick(3);
    const test2 = solution.pick(1);
    it('3', () => assert.ok([2, 3, 4].includes(test1)));
    it('1', () => assert.strictEqual(test2, 0));
  });
});
