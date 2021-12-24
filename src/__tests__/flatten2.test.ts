import assert from 'power-assert';
import { flatten, Node } from '../flatten2';

describe('src/flatten2', () => {
  describe('flatten', () => {
    it('[1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]', () =>
      assert.deepStrictEqual(
        flatten(
          Node.createNodeOfArray([
            1,
            2,
            3,
            4,
            5,
            6,
            null,
            null,
            null,
            7,
            8,
            9,
            10,
            null,
            null,
            11,
            12
          ])
        )?.toArray() ?? [],
        [1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6]
      ));
    it('[1,2,null,3]', () =>
      assert.deepStrictEqual(flatten(Node.createNodeOfArray([1, 2, null, 3]))?.toArray() ?? [], [
        1,
        3,
        2
      ]));
    it('[]', () =>
      assert.deepStrictEqual(flatten(Node.createNodeOfArray([]))?.toArray() ?? [], []));
  });
});
