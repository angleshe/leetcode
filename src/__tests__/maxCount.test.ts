import { maxCount } from '../maxCount';
import assert from 'power-assert';

describe('src/maxCount', () => {
  describe('maxCount', () => {
    it('3, 3, [[2,2],[3,3]]', () =>
      assert.equal(
        maxCount(3, 3, [
          [2, 2],
          [3, 3]
        ]),
        4
      ));
    it('3, 3, [[2,2],[3,3]]', () =>
      assert.equal(
        maxCount(3, 3, [
          [2, 2],
          [3, 3],
          [3, 3],
          [3, 3],
          [2, 2],
          [3, 3],
          [3, 3],
          [3, 3],
          [2, 2],
          [3, 3],
          [3, 3],
          [3, 3]
        ]),
        4
      ));
    it('3, 3, []', () => assert.equal(maxCount(3, 3, []), 9));
  });
});
