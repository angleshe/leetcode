import assert from 'power-assert';
import { eraseOverlapIntervals } from '../eraseOverlapIntervals';

describe('src/eraseOverlapIntervals', () => {
  describe('eraseOverlapIntervals', () => {
    it('[ [1,2], [2,3], [3,4], [1,3] ]', () =>
      assert.strictEqual(
        eraseOverlapIntervals([
          [1, 2],
          [2, 3],
          [3, 4],
          [1, 3]
        ]),
        1
      ));
    it('[ [1,2], [1,2], [1,2] ]', () =>
      assert.strictEqual(
        eraseOverlapIntervals([
          [1, 2],
          [1, 2],
          [1, 2]
        ]),
        2
      ));
    it('[ [1,2], [2,3] ]', () =>
      assert.strictEqual(
        eraseOverlapIntervals([
          [1, 2],
          [2, 3]
        ]),
        0
      ));
  });
});
