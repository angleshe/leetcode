import assert from 'power-assert';
import { minimumTotal } from '../minimumTotal';

describe('src/ minimumTotal', () => {
  describe('minimumTotal', () => {
    it('[[2],[3,4],[6,5,7],[4,1,8,3]]', () => {
      assert.strictEqual(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]), 11);
    });
  });
});
