import { search } from '../search';
import assert from 'power-assert';
import { showContent } from '../utils';
describe('src/search', () => {
  describe('search', () => {
    it(`${showContent([4, 5, 6, 7, 0, 1, 2])}, 0`, () => {
      assert.strictEqual(4, search([4, 5, 6, 7, 0, 1, 2], 0));
    });
    it(`${showContent([4, 5, 6, 7, 0, 1, 2])}, 3`, () => {
      assert.strictEqual(-1, search([4, 5, 6, 7, 0, 1, 2], 3));
    });
    it(`${showContent([4, 5, 6, 7, 8, 1, 2, 3])}, 8`, () => {
      assert.strictEqual(4, search([4, 5, 6, 7, 8, 1, 2, 3], 8));
    });
    it(`${showContent([5, 1, 2, 3, 4])}, 1`, () => {
      assert.strictEqual(1, search([5, 1, 2, 3, 4], 1));
    });
  });
});
