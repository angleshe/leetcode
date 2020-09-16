import assert from 'power-assert';
import RandomList from '../RandomList';

describe('model/RandomList', () => {
  describe('RandomList', () => {
    it('[[7,null],[13,0],[11,4],[10,2],[1,0]]', () =>
      assert.deepStrictEqual(
        RandomList.createdNode([
          [7, null],
          [13, 0],
          [11, 4],
          [10, 2],
          [1, 0]
        ])?.toArray(),
        [
          [7, null],
          [13, 0],
          [11, 4],
          [10, 2],
          [1, 0]
        ]
      ));
    it('[[1,1],[2,1]]', () =>
      assert.deepStrictEqual(
        RandomList.createdNode([
          [1, 1],
          [2, 1]
        ])?.toArray(),
        [
          [1, 1],
          [2, 1]
        ]
      ));
    it('[[3,null],[3,0],[3,null]]', () =>
      assert.deepStrictEqual(
        RandomList.createdNode([
          [3, null],
          [3, 0],
          [3, null]
        ])?.toArray(),
        [
          [3, null],
          [3, 0],
          [3, null]
        ]
      ));
  });
});
