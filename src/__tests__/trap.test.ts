import assert from 'power-assert';
import { trap } from '../trap';

describe('src/trap', () => {
  describe('trap', () => {
    it('trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])', () => {
      assert.strictEqual(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
    });
    it('trap([2, 0, 2])', () => {
      assert.strictEqual(trap([2, 0, 2]), 2);
    });
    it('trap([5, 2, 1, 2, 1, 5])', () => {
      assert.strictEqual(trap([5, 2, 1, 2, 1, 5]), 14);
    });
  });
});
