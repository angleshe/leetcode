import assert from 'power-assert';
import MapNode from '../MapNode';

describe('model/MapNode', () => {
  describe('MapNode', () => {
    it('[[2,4],[1,3],[2,4],[1,3]]', () => {
      assert.deepStrictEqual(
        MapNode.createNumberMapNode([
          [2, 4],
          [1, 3],
          [2, 4],
          [1, 3]
        ]).toArray(4),
        [
          [2, 4],
          [1, 3],
          [2, 4],
          [1, 3]
        ]
      );
    });
    it('[[]]', () => {
      assert.deepStrictEqual(MapNode.createNumberMapNode([[]]).toArray(1), [[]]);
    });
    it('[[2],[1]]', () => {
      assert.deepStrictEqual(MapNode.createNumberMapNode([[2], [1]]).toArray(2), [[2], [1]]);
    });
  });
});
