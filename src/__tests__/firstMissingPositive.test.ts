import assert from 'power-assert';
import { showContent } from '../utils';
import { firstMissingPositive } from '../firstMissingPositive';

describe('src/firstMissingPositive', () => {
  describe('firstMissingPositive', () => {
    it(showContent([1, 2, 0]), () => {
      assert.strictEqual(firstMissingPositive([1, 2, 0]), 3);
    });
    it(showContent([3, 4, -1, 1]), () => {
      assert.strictEqual(firstMissingPositive([3, 4, -1, 1]), 2);
    });
    it(showContent([7, 8, 9, 11, 12]), () => {
      assert.strictEqual(firstMissingPositive([7, 8, 9, 11, 12]), 1);
    });
    it(showContent([1, 1]), () => {
      assert.strictEqual(firstMissingPositive([1, 1]), 2);
    });
  });
});
