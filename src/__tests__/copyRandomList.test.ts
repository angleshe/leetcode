import assert from 'power-assert';
import { copyRandomList } from '../copyRandomList';
import Node from '../../model/RandomList';

describe('src/copyRandomList', () => {
  describe('copyRandomList', () => {
    it('[[7,null],[13,0],[11,4],[10,2],[1,0]]', () =>
      assert.deepStrictEqual(
        copyRandomList(
          Node.createdNode([
            [7, null],
            [13, 0],
            [11, 4],
            [10, 2],
            [1, 0]
          ])
        )?.toArray(),
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
        copyRandomList(
          Node.createdNode([
            [1, 1],
            [2, 1]
          ])
        )?.toArray(),
        [
          [1, 1],
          [2, 1]
        ]
      ));
    it('[[3,null],[3,0],[3,null]]', () =>
      assert.deepStrictEqual(
        copyRandomList(
          Node.createdNode([
            [3, null],
            [3, 0],
            [3, null]
          ])
        )?.toArray(),
        [
          [3, null],
          [3, 0],
          [3, null]
        ]
      ));
  });
});
