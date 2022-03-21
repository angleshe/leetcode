import assert from 'power-assert';
import { nextGreaterElements } from '../nextGreaterElements';

describe('src/nextGreaterElements', () => {
  describe('nextGreaterElements', () => {
    it('[1,2,1]', () => assert.deepStrictEqual(nextGreaterElements([1, 2, 1]), [2, -1, 2]));
    it('[1,2,3,4,3]', () =>
      assert.deepStrictEqual(nextGreaterElements([1, 2, 3, 4, 3]), [2, 3, 4, -1, 4]));
  });
});
