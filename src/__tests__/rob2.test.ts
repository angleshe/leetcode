import assert from 'power-assert';
import { rob } from '../rob2';

describe('src/rob2', () => {
  describe('rob', () => {
    it('[2,3,2]', () => assert.strictEqual(rob([2, 3, 2]), 3));
    it('[1,2,3,1]', () => assert.strictEqual(rob([1, 2, 3, 1]), 4));
  });
});
