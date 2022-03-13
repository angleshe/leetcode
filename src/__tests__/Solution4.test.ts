import assert from 'power-assert';
import { Solution } from '../Solution4';

describe('src/Solution4', () => {
  describe('Solution', () => {
    const solution = new Solution([
      [-2, -2, 1, 1],
      [2, 2, 4, 6]
    ]);
    const test1 = solution.pick();

    it('test1', () =>
      assert.ok(
        (test1[0] >= -2 && test1[0] <= 1 && test1[1] >= -2 && test1[1] <= 1) ||
          (test1[0] >= 2 && test1[0] <= 4 && test1[1] >= 2 && test1[1] <= 6)
      ));
  });
});
