/**
 * @description 找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @author angle
 * @date 2020-05-25
 * @export
 * @param {number[]} nums 源数据
 * @returns {number} 最大和
 */
export function maxSubArray(nums: number[]): number {
  let res: number = nums[0];
  let maxSum: number = nums[0];
  for (let i: number = 1; i < nums.length; i++) {
    maxSum = Math.max(maxSum + nums[i], nums[i]);
    res = Math.max(res, maxSum);
  }
  return res;
}
