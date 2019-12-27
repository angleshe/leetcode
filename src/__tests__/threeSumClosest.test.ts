import { showContent } from '../utils';
import assert from 'assert';
import { threeSumClosest } from '../threeSumClosest';
describe('src/shreeSumClosest', () => {
  describe('threeSumClosest', () => {
    it(`${showContent([-1, 2, 1, -4])}, 1`, () => {
      assert.strictEqual(2, threeSumClosest([-1, 2, 1, -4], 1));
    });
    it(`${showContent([0, 0, 0])}, 1`, () => {
      assert.strictEqual(0, threeSumClosest([0, 0, 0], 1));
    });
  });
});
