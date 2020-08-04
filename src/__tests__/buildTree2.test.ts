import assert from 'power-assert';
import { buildTree } from '../buildTree2';

describe('src/buildTree2', () => {
  describe('buildTree', () => {
    it('[9,3,15,20,7], [9,15,7,20,3]', () => {
      assert.deepStrictEqual(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])?.toString(), [
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
