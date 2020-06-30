import assert from 'power-assert';
import { removeDuplicates } from '../removeDuplicates2';
import { showContent } from '../utils';

describe('src/removeDuplicates2', () => {
  describe('removeDuplicates', () => {
    const test1: number[] = [1, 1, 1, 2, 2, 3];
    const test2: number[] = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    it(showContent(test1), () => {
      assert.strictEqual(removeDuplicates(test1), 5);
      assert.deepStrictEqual(test1, [1, 1, 2, 2, 3]);
    });
    it(showContent(test2), () => {
      assert.strictEqual(removeDuplicates(test2), 7);
      assert.deepStrictEqual(test2, [0, 0, 1, 1, 2, 3, 3]);
    });
  });
});
