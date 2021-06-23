import assert from 'power-assert';
import { SummaryRanges } from '../SummaryRangesClass';

describe('src/SummaryRangesClass', () => {
  describe('SummaryRanges', () => {
    const summaryRanges = new SummaryRanges();
    summaryRanges.addNum(1);
    const test1 = JSON.parse(JSON.stringify(summaryRanges.getIntervals()));
    it('1', () => assert.deepStrictEqual(test1, [[1, 1]]));
    summaryRanges.addNum(3);
    const test2 = JSON.parse(JSON.stringify(summaryRanges.getIntervals()));
    it('3', () =>
      assert.deepStrictEqual(test2, [
        [1, 1],
        [3, 3]
      ]));
    summaryRanges.addNum(7);
    const test3 = JSON.parse(JSON.stringify(summaryRanges.getIntervals()));
    it('7', () =>
      assert.deepStrictEqual(test3, [
        [1, 1],
        [3, 3],
        [7, 7]
      ]));
    summaryRanges.addNum(2);
    const test4 = JSON.parse(JSON.stringify(summaryRanges.getIntervals()));
    it('2', () =>
      assert.deepStrictEqual(test4, [
        [1, 3],
        [7, 7]
      ]));

    summaryRanges.addNum(6);
    const test5 = JSON.parse(JSON.stringify(summaryRanges.getIntervals()));
    it('6', () =>
      assert.deepStrictEqual(test5, [
        [1, 3],
        [6, 7]
      ]));
  });

  const summaryRanges2 = new SummaryRanges();
  summaryRanges2.addNum(6);
  summaryRanges2.addNum(6);
  summaryRanges2.addNum(0);
  summaryRanges2.addNum(4);
  summaryRanges2.addNum(8);
  summaryRanges2.addNum(7);
  summaryRanges2.addNum(6);
  summaryRanges2.addNum(4);
  summaryRanges2.addNum(7);
  summaryRanges2.addNum(5);
  it('summaryRanges2', () =>
    assert.deepStrictEqual(summaryRanges2.getIntervals(), [
      [0, 0],
      [4, 8]
    ]));
});
