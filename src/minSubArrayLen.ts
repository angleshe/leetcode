/**
 * @description 找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组的长度
 * @author angle
 * @date 2020-11-18
 * @export
 * @param {number} s
 * @param {number[]} nums
 * @returns {number}
 */
export function minSubArrayLen(s: number, nums: number[]): number {
  let leftIndex: number = 0;
  let rightIndex: number = 0;
  let sum: number = 0;
  let res: number = Infinity;
  while (rightIndex < nums.length) {
    sum += nums[rightIndex++];
    while (sum >= s) {
      res = Math.min(rightIndex - leftIndex, res);
      sum -= nums[leftIndex++];
    }
  }
  return res === Infinity ? 0 : res;
}
