import { validSquare } from '../validSquare';
import assert from 'power-assert';

describe('src/validSquare', () => {
  describe('validSquare', () => {
    it('[0,0], [1,1], [1,0], [0,1]', () => assert.ok(validSquare([0, 0], [1, 1], [1, 0], [0, 1])));
    it('[0,0], [1,1], [1,0], [0,12]', () =>
      assert.ok(!validSquare([0, 0], [1, 1], [1, 0], [0, 12])));
    it('[1,0], [-1,0], [0,1], [0,-1]', () =>
      assert.ok(validSquare([1, 0], [-1, 0], [0, 1], [0, -1])));
    it('[0,0], [5,0], [5,4], [0,4]', () => assert.ok(!validSquare([0, 0], [5, 0], [5, 4], [0, 4])));
  });
});
