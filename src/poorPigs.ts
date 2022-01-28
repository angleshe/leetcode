/**
 * @description 定时间内判断哪个桶有毒所需的最小猪数
 * @author angle
 * @date 28/01/2022
 * @export
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {*}  {number}
 */
export function poorPigs(buckets: number, minutesToDie: number, minutesToTest: number): number {
  const base: number = Math.floor(minutesToTest / minutesToDie) + 1;
  return Math.ceil(Math.log(buckets) / Math.log(base));
}
