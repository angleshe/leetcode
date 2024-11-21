import assert from 'power-assert';
import { _Node } from '../_Node';
describe('model/_Node', () => {
  describe('_Node', () => {
    it('[1,null,3,2,4,null,5,6][1,null,3,2,4,null,5,6]', () =>
      assert.deepEqual(_Node.createNumberNode([1, null, 3, 2, 4, null, 5, 6]).toArray(), [
        1,
        null,
        3,
        2,
        4,
        null,
        5,
        6
      ]));
    it('[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]', () =>
      assert.deepEqual(
        _Node
          .createNumberNode([
            1,
            null,
            2,
            3,
            4,
            5,
            null,
            null,
            6,
            7,
            null,
            8,
            null,
            9,
            10,
            null,
            null,
            11,
            null,
            12,
            null,
            13,
            null,
            null,
            14
          ])
          .toArray(),

        [
          1,
          null,
          2,
          3,
          4,
          5,
          null,
          null,
          6,
          7,
          null,
          8,
          null,
          9,
          10,
          null,
          null,
          11,
          null,
          12,
          null,
          13,
          null,
          null,
          14
        ]
      ));
  });
});
