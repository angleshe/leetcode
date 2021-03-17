import assert from 'power-assert';
import { NumArray } from '../NumArray2';

describe('src/NumArray2', () => {
  describe('NumArray', () => {
    const numArray = new NumArray([1, 3, 5]);
    const test1 = numArray.sumRange(0, 2);
    numArray.update(1, 2);
    const test2 = numArray.sumRange(0, 2);
    it('test1', () => assert.strictEqual(test1, 9));
    it('test2', () => assert.strictEqual(test2, 8));
  });
});
