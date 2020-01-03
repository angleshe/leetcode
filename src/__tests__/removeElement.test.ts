import { removeElement } from '../removeElement';
import { showContent } from '../utils';
import assert from 'power-assert';
describe('src/removeElement', () => {
  describe('removeElement', () => {
    const testArr1: number[] = [3, 2, 2, 3];
    const testArr2: number[] = [0, 1, 2, 2, 3, 0, 4, 2];
    it(`${showContent(testArr1)}, 3`, () => {
      assert.strictEqual(removeElement(testArr1, 3), 2);
      assert.deepStrictEqual(testArr1.slice(0, 2), [2, 2]);
    });
    it(`${showContent(testArr2)}, 2`, () => {
      assert.strictEqual(removeElement(testArr2, 2), 5);
      assert.deepStrictEqual(testArr2.slice(0, 5), [0, 1, 3, 0, 4]);
    });
  });
});
