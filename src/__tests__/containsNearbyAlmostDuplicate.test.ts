import assert from 'power-assert';
import { containsNearbyAlmostDuplicate } from '../containsNearbyAlmostDuplicate';

describe('src/containsNearbyAlmostDuplicate', () => {
  describe('containsNearbyAlmostDuplicate', () => {
    it('[1,2,3,1], 3, 0', () => assert.ok(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)));
    it('[1,0,1,1], 1, 2', () => assert.ok(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2)));
    it('[1,5,9,1,5,9], 2, 3', () =>
      assert.ok(!containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)));
  });
});
