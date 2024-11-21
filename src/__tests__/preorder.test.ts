import { preorder } from '../preorder';
import { _Node } from '../../model/_Node';
import assert from 'power-assert';

describe('src/preorder', () => {
  describe('preorder', () => {
    it('[1,null,3,2,4,null,5,6]', () =>
      assert.deepEqual(preorder(_Node.createNumberNode([1, null, 3, 2, 4, null, 5, 6])), [
        1,
        3,
        5,
        6,
        2,
        4
      ]));
    it('[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]', () =>
      assert.deepEqual(
        preorder(
          _Node.createNumberNode([
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
        ),
        [1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10]
      ));
  });
});
