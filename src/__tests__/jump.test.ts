import assert from 'power-assert';
import { jump } from '../jump';

describe('src/jump', () => {
  describe('jump', () => {
    it('[2, 3, 1, 1, 4]', () => {
      assert.strictEqual(2, jump([2, 3, 1, 1, 4]));
    });
  });
});
