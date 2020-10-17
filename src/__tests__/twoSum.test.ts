import assert from 'power-assert';
import { twoSum } from '../twoSum';

describe('src/twoSum', () => {
  describe('twoSum', () => {
    it('[2, 7, 11, 15], 9', () => assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [1, 2]));
  });
});
