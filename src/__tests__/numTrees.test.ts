import assert from 'power-assert';
import { numTrees } from '../numTrees';

describe('src/numTrees', () => {
  describe('numTrees', () => {
    it('3', () => {
      assert.strictEqual(numTrees(3), 5);
    });
  });
});
