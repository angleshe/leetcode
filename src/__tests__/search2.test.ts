import assert from 'power-assert';
import { search } from '../search2';

describe('src/search2', () => {
  describe('search', () => {
    it('[2,5,6,0,0,1,2], 0', () => {
      assert.ok(search([2, 5, 6, 0, 0, 1, 2], 0));
    });
    it('[2,5,6,0,0,1,2], 3', () => {
      assert.ok(!search([2, 5, 6, 0, 0, 1, 2], 3));
    });
  });
});
