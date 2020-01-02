import { showContent } from '../utils';
import assert from 'power-assert';
import { removeDuplicates } from '../removeDuplicates';
describe('src/removeDuplicates', () => {
  describe('removeDuplicates', () => {
    const testArr1: number[] = [1, 1, 2];
    it(showContent(testArr1), () => {
      assert.strictEqual(2, removeDuplicates(testArr1));
      assert.deepStrictEqual(testArr1.slice(0, 2), [1, 2]);
    });
    const testArr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    it(showContent(testArr2), () => {
      assert.strictEqual(5, removeDuplicates(testArr2));
      assert.deepStrictEqual(testArr2.slice(0, 5), [0, 1, 2, 3, 4]);
    });
  });
});
