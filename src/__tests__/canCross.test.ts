import assert from 'power-assert';
import { canCross } from '../canCross';

describe('src/canCross', () => {
  describe('canCross', () => {
    it('[0,1,3,5,6,8,12,17]', () => assert.ok(canCross([0, 1, 3, 5, 6, 8, 12, 17])));
    it('[0,1,2,3,4,8,9,11]', () => assert.ok(!canCross([0, 1, 2, 3, 4, 8, 9, 11])));
  });
});
