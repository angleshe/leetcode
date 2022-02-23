import assert from 'power-assert';
import { Solution } from '../Solution3';

describe('src/Solution3', () => {
  describe('Solution', () => {
    const testSolution = new Solution(1, 0, 0);
    it('test1', () => {
      const [x, y] = testSolution.randPoint();
      assert.ok(x ** 2 + y ** 2 <= 1);
    });
    it('test2', () => {
      const [x, y] = testSolution.randPoint();
      assert.ok(x ** 2 + y ** 2 <= 1);
    });
    it('test3', () => {
      const [x, y] = testSolution.randPoint();
      assert.ok(x ** 2 + y ** 2 <= 1);
    });
    it('test4', () => {
      const [x, y] = testSolution.randPoint();
      assert.ok(x ** 2 + y ** 2 <= 1);
    });
  });
});
