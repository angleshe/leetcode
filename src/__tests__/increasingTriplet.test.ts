import assert from 'power-assert';
import { increasingTriplet } from '../increasingTriplet';

describe('src/increasingTriplet', () => {
  describe('increasingTriplet', () => {
    it('[1,2,3,4,5]', () => assert.ok(increasingTriplet([1, 2, 3, 4, 5])));
    it('[5,4,3,2,1]', () => assert.ok(!increasingTriplet([5, 4, 3, 2, 1])));
    it('[2,1,5,0,4,6]', () => assert.ok(increasingTriplet([2, 1, 5, 0, 4, 6])));
  });
});
