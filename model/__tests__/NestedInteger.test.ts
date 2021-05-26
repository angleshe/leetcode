import assert from 'power-assert';
import { NestedInteger } from '../NestedInteger';

describe('model/NestedInteger', () => {
  const testList = NestedInteger.createdNestedIntegerList([[1, 1], 2, [1, 1]]);
  describe('NestedInteger', () => {
    describe('isInteger', () => {
      it('[1, 1]', () => assert.ok(!testList[0].isInteger()));
      it('2', () => assert.ok(testList[1].isInteger()));
    });
    describe('getInteger', () => {
      it('[1, 1]', () => assert.strictEqual(testList[0].getInteger(), null));
      it('2', () => assert.strictEqual(testList[1].getInteger(), 2));
    });
    describe('toArray', () => {
      it('[1, 1]', () => assert.deepStrictEqual(testList[0].toArray(), [1, 1]));
      it('2', () => assert.strictEqual(testList[1].toArray(), 2));
    });
    describe('getList', () => {
      it('[1, 1]', () =>
        assert.deepStrictEqual(
          testList[0].getList().map((item) => item.toArray()),
          [1, 1]
        ));
      it('2', () =>
        assert.deepStrictEqual(
          testList[1].getList().map((item) => item.toArray()),
          []
        ));
    });
  });
});
