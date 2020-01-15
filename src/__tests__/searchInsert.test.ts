import { searchInsert } from '../searchInsert';
import { showContent } from '../utils';
import assert from 'power-assert';
describe('src/searchInsert', () => {
  describe('searchInsert', () => {
    it(`${showContent([1, 3, 5, 6])}, 5`, () => {
      assert.strictEqual(2, searchInsert([1, 3, 5, 6], 5));
    });
    it(`${showContent([1, 3, 5, 6])}, 2`, () => {
      assert.strictEqual(1, searchInsert([1, 3, 5, 6], 2));
    });
    it(`${showContent([1, 3, 5, 6])}, 7`, () => {
      assert.strictEqual(4, searchInsert([1, 3, 5, 6], 7));
    });
    it(`${showContent([1, 3, 5, 6])}, 0`, () => {
      assert.strictEqual(0, searchInsert([1, 3, 5, 6], 0));
    });
  });
});
