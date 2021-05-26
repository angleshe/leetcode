import assert from 'power-assert';
import { NestedIterator } from '../NestedIterator';
import { NestedInteger } from '../../model/NestedInteger';

describe('src/NestedIterator', () => {
  describe('NestedIterator', () => {
    it('[[1,1],2,[1,1]]', () => {
      const nestedInteger = NestedInteger.createdNestedIntegerList([[1, 1], 2, [1, 1]]);
      const nestedIterator = new NestedIterator(nestedInteger);
      const res: number[] = [];
      while (nestedIterator.hasNext()) {
        res.push(nestedIterator.next());
      }
      assert.deepStrictEqual(res, [1, 1, 2, 1, 1]);
    });
    it('[1,[4,[6]]]', () => {
      const nestedInteger = NestedInteger.createdNestedIntegerList([1, [4, [6]]]);
      const nestedIterator = new NestedIterator(nestedInteger);
      const res: number[] = [];
      while (nestedIterator.hasNext()) {
        res.push(nestedIterator.next());
      }
      assert.deepStrictEqual(res, [1, 4, 6]);
    });
  });
});
