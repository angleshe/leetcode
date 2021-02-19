import assert from 'power-assert';
import { solution } from '../solution';

describe('src/solution', () => {
  describe('solution', () => {
    it('n = 5，并且 version = 4 是第一个错误的版本', () => {
      const fn = solution((version) => version > 3);
      assert.strictEqual(fn(5), 4);
    });
  });
});
