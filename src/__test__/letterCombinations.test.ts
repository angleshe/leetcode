import { letterCombinations } from '../letterCombinations';
import assert from 'assert';
describe('src/letterCombinations', () => {
  describe('letterCombinations', () => {
    it('23', () => {
      assert.deepStrictEqual(
        ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
        letterCombinations('23')
      );
    });
  });
});
