import assert from 'power-assert';
import { summaryRanges } from '../summaryRanges';

describe('src/summaryRanges', () => {
  describe('summaryRanges', () => {
    it('[0,1,2,4,5,7]', () =>
      assert.deepStrictEqual(summaryRanges([0, 1, 2, 4, 5, 7]), ['0->2', '4->5', '7']));
    it('[0,2,3,4,6,8,9]', () =>
      assert.deepStrictEqual(summaryRanges([0, 2, 3, 4, 6, 8, 9]), ['0', '2->4', '6', '8->9']));
    it('[]', () => assert.deepStrictEqual(summaryRanges([]), []));
    it('[-1]', () => assert.deepStrictEqual(summaryRanges([-1]), ['-1']));
    it('[0]', () => assert.deepStrictEqual(summaryRanges([0]), ['0']));
  });
});
