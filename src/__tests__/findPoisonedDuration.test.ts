import assert from 'power-assert';
import { findPoisonedDuration } from '../findPoisonedDuration';

describe('src/findPoisonedDuration', () => {
  describe('findPoisonedDuration', () => {
    it('[1,4], 2', () => assert.strictEqual(findPoisonedDuration([1, 4], 2), 4));
    it('[1,2], 2', () => assert.strictEqual(findPoisonedDuration([1, 2], 2), 3));
  });
});
