import assert from 'power-assert';
import { cloneGraph } from '../cloneGraph';
import Node from '../../model/MapNode';

describe('src/cloneGraph', () => {
  describe('cloneGraph', () => {
    it('[[2,4],[1,3],[2,4],[1,3]]', () =>
      assert.deepStrictEqual(
        cloneGraph(
          Node.createNumberMapNode([
            [2, 4],
            [1, 3],
            [2, 4],
            [1, 3]
          ])
        )!.toArray(4),
        [
          [2, 4],
          [1, 3],
          [2, 4],
          [1, 3]
        ]
      ));
    it('[[]]', () =>
      assert.deepStrictEqual(cloneGraph(Node.createNumberMapNode([[]]))!.toArray(1), [[]]));
    it('[[2],[1]]', () =>
      assert.deepStrictEqual(cloneGraph(Node.createNumberMapNode([[2], [1]]))!.toArray(2), [
        [2],
        [1]
      ]));
  });
});
