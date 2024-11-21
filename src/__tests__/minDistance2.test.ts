import assert from 'power-assert';
import { minDistance } from '../minDistance2';

describe('src/minDistance', () => {
  describe('minDistance', () => {
    it('sea, eat', () => assert.equal(minDistance('sea', 'eat'), 2));
    it('leetcode, etco', () => assert.equal(minDistance('leetcode', 'etco'), 4));
  });
});
