import assert from 'power-assert';
import { change } from '../change';

describe('src/change', () => {
  describe('change', () => {
    it('5, [1, 2, 5]', () => assert.equal(change(5, [1, 2, 5]), 4));
    it('3, [2]', () => assert.equal(change(3, [2]), 0));
    it('10, [10]', () => assert.equal(change(10, [10]), 1));
    it('500, [3,5,7,8,9,10,11]', () =>
      assert.equal(change(500, [3, 5, 7, 8, 9, 10, 11]), 35502874));
  });
});
