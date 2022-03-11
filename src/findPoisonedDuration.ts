/**
 * @description 返回艾希处于中毒状态的总秒数。
 * @author angle
 * @date 2022-03-11
 * @export
 * @param {number[]} timeSeries
 * @param {number} duration
 * @returns {number}
 */
export function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let res: number = 0;
  if (timeSeries.length) {
    let end: number = timeSeries[0] + duration;
    for (let i: number = 1; i < timeSeries.length; i++) {
      if (timeSeries[i] >= end) {
        res += duration;
      } else {
        res += timeSeries[i] - timeSeries[i - 1];
      }
      end = timeSeries[i] + duration;
    }
    res += duration;
  }

  return res;
}
