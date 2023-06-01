import { Solution } from '../Solution5';
import assert from 'power-assert';

describe('src/Solution5', () => {
  describe('Solution', () => {
    it('3, 1', () => {
      const w = 3;
      const h = 1;
      const resSet: Set<string> = new Set<string>();
      const solution = new Solution(w, h);

      function checkSolutionFlip(): void {
        const [x, y] = solution.flip();
        const resStr = `${x},${y}`;
        assert.ok(x >= 0 && x < w);
        assert.ok(y >= 0 && y < h);
        assert.ok(!resSet.has(resStr));
        resSet.add(resStr);
      }

      checkSolutionFlip();
      checkSolutionFlip();
      checkSolutionFlip();
      solution.reset();
      resSet.clear();
      checkSolutionFlip();
    });
  });
});
