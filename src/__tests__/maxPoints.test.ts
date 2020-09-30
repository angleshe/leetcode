import assert from 'power-assert';
import { maxPoints, gcd } from '../maxPoints';

describe('src/maxPoints', () => {
  describe('gcd', () => {
    it('3, 6', () => assert.strictEqual(gcd(3, 6), 3));
    it('5, 6', () => assert.strictEqual(gcd(5, 6), 1));
    it('4, 6', () => assert.strictEqual(gcd(4, 6), 2));
  });
  describe('maxPoints', () => {
    it('[[1,1],[2,2],[3,3]]', () => {
      assert.strictEqual(
        maxPoints([
          [1, 1],
          [2, 2],
          [3, 3]
        ]),
        3
      );
    });
    it('[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]', () => {
      assert.strictEqual(
        maxPoints([
          [1, 1],
          [3, 2],
          [5, 3],
          [4, 1],
          [2, 3],
          [1, 4]
        ]),
        4
      );
    });
  });
});
