import assert from 'power-assert';
import { islandPerimeter } from '../islandPerimeter';

describe('src/islandPerimeter', () => {
  describe('islandPerimeter', () => {
    it('[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]', () =>
      assert.strictEqual(
        islandPerimeter([
          [0, 1, 0, 0],
          [1, 1, 1, 0],
          [0, 1, 0, 0],
          [1, 1, 0, 0]
        ]),
        16
      ));
    it('[[1]]', () => assert.strictEqual(islandPerimeter([[1]]), 4));
    it('[[1,0]]', () => assert.strictEqual(islandPerimeter([[1, 0]]), 4));
  });
});
