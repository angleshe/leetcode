/**
 * @description 找到需要移除区间的最小数量，使剩余区间互不重叠
 * @author angle
 * @date 2022-01-02
 * @export
 * @param {number[][]} intervals
 * @returns {number}
 */
export function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length) {
    const arr = intervals.sort((a, b) => a[1] - b[1]);
    let count = 1;

    let end = intervals[0][1];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i][0] >= end) {
        count++;
        end = arr[i][1];
      }
    }

    return arr.length - count;
  }
  return 0;
}
