import assert from 'power-assert';
import Node, { INodeObj } from '../Node';

describe('model/Node', () => {
  describe('Node', () => {
    const test1: INodeObj = {
      $id: '1',
      left: {
        $id: '2',
        left: { $id: '3', left: null, next: null, right: null, val: 4 },
        next: null,
        right: { $id: '4', left: null, next: null, right: null, val: 5 },
        val: 2
      },
      next: null,
      right: {
        $id: '5',
        left: { $id: '6', left: null, next: null, right: null, val: 6 },
        next: null,
        right: { $id: '7', left: null, next: null, right: null, val: 7 },
        val: 3
      },
      val: 1
    };
    const test2: INodeObj = {
      $id: '1',
      left: {
        $id: '2',
        left: {
          $id: '3',
          left: null,
          next: {
            $id: '4',
            left: null,
            next: {
              $id: '5',
              left: null,
              next: { $id: '6', left: null, next: null, right: null, val: 7 },
              right: null,
              val: 6
            },
            right: null,
            val: 5
          },
          right: null,
          val: 4
        },
        next: { $id: '7', left: { $ref: '5' }, next: null, right: { $ref: '6' }, val: 3 },
        right: { $ref: '4' },
        val: 2
      },
      next: null,
      right: { $ref: '7' },
      val: 1
    };
    it(JSON.stringify(test1), () => {
      assert.strictEqual(
        JSON.stringify(Node.createdNumberNode(test1).toString()),
        JSON.stringify(test1)
      );
    });
    it(JSON.stringify(test2), () => {
      assert.strictEqual(
        JSON.stringify(Node.createdNumberNode(test2).toString()),
        JSON.stringify(test2)
      );
    });
  });
});
