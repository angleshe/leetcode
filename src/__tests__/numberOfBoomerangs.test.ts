import assert from 'power-assert';
import { numberOfBoomerangs } from '../numberOfBoomerangs';

describe('src/numberOfBoomerangs', () => {
  describe('numberOfBoomerangs', () => {
    it('[[0,0],[1,0],[2,0]]', () =>
      assert.strictEqual(
        numberOfBoomerangs([
          [0, 0],
          [1, 0],
          [2, 0]
        ]),
        2
      ));
    it('[[1,1],[2,2],[3,3]]', () =>
      assert.strictEqual(
        numberOfBoomerangs([
          [1, 1],
          [2, 2],
          [3, 3]
        ]),
        2
      ));
    it('[[1,1]]', () => assert.strictEqual(numberOfBoomerangs([[1, 1]]), 0));
  });
});
