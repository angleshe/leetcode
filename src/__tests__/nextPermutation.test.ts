import { nextPermutation } from '../nextPermutation';
import { showContent } from '../utils';
import assert from 'power-assert';
describe('src/nextPermutation', () => {
  describe('nextPermutation', () => {
    const testData1: number[] = [1, 2, 3];
    const testData2: number[] = [3, 2, 1];
    const testData3: number[] = [1, 1, 5];
    const testData4: number[] = [1, 3, 2];
    it(showContent(testData1), () => {
      nextPermutation(testData1);
      assert.deepStrictEqual([1, 3, 2], testData1);
    });
    it(showContent(testData2), () => {
      nextPermutation(testData2);
      assert.deepStrictEqual([1, 2, 3], testData2);
    });
    it(showContent(testData3), () => {
      nextPermutation(testData3);
      assert.deepStrictEqual([1, 5, 1], testData3);
    });
    it(showContent(testData4), () => {
      nextPermutation(testData4);
      assert.deepStrictEqual([2, 1, 3], testData4);
    });
  });
});
