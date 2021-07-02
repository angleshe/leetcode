import assert from 'power-assert';
import { maxEnvelopes } from '../maxEnvelopes';

describe('src/maxEnvelopes', () => {
  describe('maxEnvelopes', () => {
    it('[[5,4],[6,4],[6,7],[2,3]]', () =>
      assert.strictEqual(
        maxEnvelopes([
          [5, 4],
          [6, 4],
          [6, 7],
          [2, 3]
        ]),
        3
      ));
    // it('[[1,1],[1,1],[1,1]]', () =>
    //   assert.strictEqual(
    //     maxEnvelopes([
    //       [1, 1],
    //       [1, 1],
    //       [1, 1]
    //     ]),
    //     1
    //   ));
  });
});
