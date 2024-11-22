import { postorder } from '../postorder';
import assert from 'power-assert';
import { _Node } from '../../model/_Node';

describe('src/postorder', () => {
  describe('postorder', () => {
    it('[1,null,3,2,4,null,5,6]', () =>
      assert.deepEqual(postorder(_Node.createNumberNode([1, null, 3, 2, 4, null, 5, 6])), [
        5,
        6,
        3,
        2,
        4,
        1
      ]));
    it('[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]', () =>
      assert.deepEqual(
        postorder(
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
        [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1]
      ));
  });
});
