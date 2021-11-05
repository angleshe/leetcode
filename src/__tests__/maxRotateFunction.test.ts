import assert from 'power-assert';
import { maxRotateFunction } from '../maxRotateFunction';

describe('src/maxRotateFunction', () => {
  describe('maxRotateFunction', () => {
    it('[4, 3, 2, 6]', () => assert.strictEqual(maxRotateFunction([4, 3, 2, 6]), 26));
  });
});
