/**
 * @description 找出数组中没有出现的最小的正整数
 * @author angle
 * @date 2020-05-06
 * @export
 * @param {number[]} nums 查找数组
 * @returns {number} 数组中没有出现的最小的正整数
 */
export function firstMissingPositive(nums: number[]): number {
  for (let i: number = 0; i < nums.length; i++) {
    while (
      nums[i] > 0 &&
      nums[i] <= nums.length &&
      nums[i] !== i + 1 &&
      nums[i] !== nums[nums[i] - 1]
    ) {
      const target: number = nums[i] - 1;
      [nums[i], nums[target]] = [nums[target], nums[i]];
    }
  }
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
}
