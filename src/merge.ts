/**
 * @description 合并所有重叠的区间
 * @author angle
 * @date 2020-05-28
 * @export
 * @param {number[][]} intervals 数据源
 * @returns {number[][]} 处理后数据
 */
export function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) {
    return [];
  }
  const res: number[][] = [intervals[0]];
  for (let i: number = 1; i < intervals.length; i++) {
    let minIndex: number = res.length;
    let maxIndex: number = 0;
    for (let j: number = 0; j < res.length; j++) {
      if (minIndex === res.length && res[j][1] >= intervals[i][0]) {
        minIndex = j;
      }
      if (res[j][0] <= intervals[i][1]) {
        maxIndex = j + 1;
      } else {
        break;
      }
    }
    if (minIndex === res.length) {
      res.push(intervals[i]);
    } else if (maxIndex === minIndex) {
      res.splice(maxIndex, 0, intervals[i]);
    } else {
      res.splice(minIndex, maxIndex - minIndex, [
        Math.min(res[minIndex][0], intervals[i][0]),
        Math.max(res[maxIndex - 1][1], intervals[i][1])
      ]);
    }
  }
  return res;
}
