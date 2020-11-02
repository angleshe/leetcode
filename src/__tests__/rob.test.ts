import assert from 'power-assert';
import { rob } from '../rob';

describe('src/rob', () => {
  describe('rob', () => {
    it('[1,2,3,1]', () => assert.strictEqual(rob([1, 2, 3, 1]), 4));
    it('[2,7,9,3,1]', () => assert.strictEqual(rob([2, 7, 9, 3, 1]), 12));
  });
});
