/**
 * @description 找到数组(n)的多数元素(大于 [n/2])
 * @author angle
 * @date 2020-10-19
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function majorityElement(nums: number[]): number {
  let candidate: number = 0;
  let count: number = 0;
  for (const num of nums) {
    if (candidate === num) {
      count++;
    } else {
      if (count === 0) {
        candidate = num;
        count++;
      } else {
        count--;
      }
    }
  }
  return candidate;
}
