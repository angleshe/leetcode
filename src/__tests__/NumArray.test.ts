import assert from 'power-assert';
import { NumArray } from '../NumArray';

describe('src/NumArray', () => {
  describe('NumArray', () => {
    const test = new NumArray([-2, 0, 3, -5, 2, -1]);
    const sumRange02 = test.sumRange(0, 2);
    const sumRange25 = test.sumRange(2, 5);
    const sumRange05 = test.sumRange(0, 5);
    it('0, 2', () => assert.strictEqual(sumRange02, 1));
    it('2, 5', () => assert.strictEqual(sumRange25, -1));
    it('0, 5', () => assert.strictEqual(sumRange05, -3));
  });
});
