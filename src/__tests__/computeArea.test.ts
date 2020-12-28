import assert from 'power-assert';
import { computeArea } from '../computeArea';

describe('src/computeArea', () => {
  describe('computeArea', () => {
    it('-3, 0, 3, 4, 0, -1, 9, 2', () =>
      assert.strictEqual(computeArea(-3, 0, 3, 4, 0, -1, 9, 2), 45));
  });
});
