import assert from 'power-assert';
import { uniquePaths } from '../uniquePaths';

describe('src/uniquePaths', () => {
  describe('uniquePaths', () => {
    it('3, 2', () => {
      assert.strictEqual(uniquePaths(3, 2), 3);
    });
    it('7, 3', () => {
      assert.strictEqual(uniquePaths(7, 3), 28);
    });
    it('3, 7', () => {
      assert.strictEqual(uniquePaths(3, 7), 28);
    });
  });
});
