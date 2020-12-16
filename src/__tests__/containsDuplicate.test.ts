import assert from 'power-assert';
import { containsDuplicate } from '../containsDuplicate';

describe('src/containsDuplicate', () => {
  describe('containsDuplicate', () => {
    it('[1,2,3,1]', () => assert.ok(containsDuplicate([1, 2, 3, 1])));
    it('[1,2,3,4]', () => assert.ok(!containsDuplicate([1, 2, 3, 4])));
    it('[1,1,1,3,3,4,3,2,4,2]', () => assert.ok(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])));
  });
});
