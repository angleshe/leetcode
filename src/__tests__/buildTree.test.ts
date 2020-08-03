import assert from 'power-assert';
import { buildTree } from '../buildTree';

describe('src/buildTree', () => {
  describe('buildTree', () => {
    it('[3,9,20,15,7], [9,3,15,20,7]', () => {
      assert.deepStrictEqual(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])?.toString(), [
        3,
        9,
        20,
        null,
        null,
        15,
        7
      ]);
    });
  });
});
