import assert from 'power-assert';
import { calculateMinimumHP } from '../calculateMinimumHP';

describe('src/calculateMinimumHp', () => {
  describe('calculateMinimumHP', () => {
    it('[[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]', () =>
      assert.strictEqual(
        calculateMinimumHP([
          [-2, -3, 3],
          [-5, -10, 1],
          [10, 30, -5]
        ]),
        7
      ));
  });
});
