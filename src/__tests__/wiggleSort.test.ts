import assert from 'power-assert';
import { wiggleSort } from '../wiggleSort';
import { showContent } from '../utils';

describe('src/wiggleSort', () => {
  describe('wiggleSort', () => {
    const test1: number[] = [1, 5, 1, 1, 6, 4];
    it(showContent(test1), () => {
      wiggleSort(test1);
      assert.deepStrictEqual(test1, [1, 6, 1, 5, 1, 4]);
    });
    const test2: number[] = [1, 3, 2, 2, 3, 1];
    it(showContent(test2), () => {
      wiggleSort(test2);
      assert.deepStrictEqual(test2, [2, 3, 1, 3, 1, 2]);
    });
    const test3: number[] = [1, 1, 2, 1, 2, 2, 1];
    it(showContent(test3), () => {
      wiggleSort(test3);
      assert.deepStrictEqual(test3, [1, 2, 1, 2, 1, 2, 1]);
    });
  });
});
