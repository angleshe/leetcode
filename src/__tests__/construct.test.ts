import assert from 'power-assert';
import { construct } from '../construct';

describe('src/construct', () => {
  describe('construct', () => {
    it('[[0,1],[1,0]]', () =>
      assert.deepStrictEqual(
        construct([
          [0, 1],
          [1, 0]
        ])?.toArray(),
        [
          [0, 1],
          [1, 0],
          [1, 1],
          [1, 1],
          [1, 0]
        ]
      ));
    it('[[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]', () =>
      assert.deepStrictEqual(
        construct([
          [1, 1, 1, 1, 0, 0, 0, 0],
          [1, 1, 1, 1, 0, 0, 0, 0],
          [1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 0, 0, 0, 0],
          [1, 1, 1, 1, 0, 0, 0, 0],
          [1, 1, 1, 1, 0, 0, 0, 0],
          [1, 1, 1, 1, 0, 0, 0, 0]
        ])?.toArray(),
        [
          [0, 1],
          [1, 1],
          [0, 1],
          [1, 1],
          [1, 0],
          null,
          null,
          null,
          null,
          [1, 0],
          [1, 0],
          [1, 1],
          [1, 1]
        ]
      ));
    it('[[1,1],[1,1]]', () =>
      assert.deepStrictEqual(
        construct([
          [1, 1],
          [1, 1]
        ])?.toArray(),
        [[1, 1]]
      ));
    it('[[0]]', () => assert.deepStrictEqual(construct([[0]])?.toArray(), [[1, 0]]));
    it('[[1,1,0,0],[1,1,0,0],[0,0,1,1],[0,0,1,1]]', () =>
      assert.deepStrictEqual(
        construct([
          [1, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 1, 1],
          [0, 0, 1, 1]
        ])?.toArray(),
        [
          [0, 1],
          [1, 1],
          [1, 0],
          [1, 0],
          [1, 1]
        ]
      ));
  });
});