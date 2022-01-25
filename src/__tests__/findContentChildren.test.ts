import assert from 'power-assert';
import { findContentChildren } from '../findContentChildren';

describe('src/findContentChildren', () => {
  describe('findContentChildren', () => {
    it('[1,2,3], [1,1]', () => assert.strictEqual(findContentChildren([1, 2, 3], [1, 1]), 1));
    it('[1,2], [1,2,3]', () => assert.strictEqual(findContentChildren([1, 2], [1, 2, 3]), 2));
  });
});
