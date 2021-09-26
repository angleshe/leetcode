import assert from 'power-assert';
import { combinationSum4 } from '../combinationSum4';

describe('src/combinationSum4', () => {
  describe('combinationSum4', () => {
    it('[1,2,3], 4', () => assert.strictEqual(combinationSum4([1, 2, 3], 4), 7));
    it('[9], 3', () => assert.strictEqual(combinationSum4([9], 3), 0));
  });
});
