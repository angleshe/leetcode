import { maxArea } from '../maxArea';
import { showContent } from './units';
import assert from 'assert';
describe('src/maxArea', () => {
  describe('maxArea()', () => {
    it(showContent([1, 8, 6, 2, 5, 4, 8, 3, 7]), () => {
      assert.strictEqual(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
    });
  });
});
