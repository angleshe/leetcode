import assert from 'power-assert';
import { containsNearbyDuplicate } from '../containsNearbyDuplicate';

describe('src/containsNearbyDuplicate', () => {
  describe('containsNearbyDuplicate', () => {
    it('[1,2,3,1], 3', () => assert.ok(containsNearbyDuplicate([1, 2, 3, 1], 3)));
    it('[1,0,1,1], 1', () => assert.ok(containsNearbyDuplicate([1, 0, 1, 1], 1)));
    it('[1,2,3,1,2,3], 2', () => assert.ok(!containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)));
  });
});
