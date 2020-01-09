/**
 * @description 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列,如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）
 * @author angle
 * @date 2020-01-09
 * @export
 * @param {number[]} nums 原数组
 */
export function nextPermutation(nums: number[]): void {
  let i: number = nums.length - 1;
  while (i >= 0) {
    if (i > 0 && nums[i - 1] < nums[i]) {
      let target = i;
      for (let j: number = i + 1; j < nums.length; j++) {
        if (nums[i - 1] < nums[j] && nums[j] < nums[target]) {
          target = j;
        }
      }
      [nums[i - 1], nums[target]] = [nums[target], nums[i - 1]];
      break;
    }
    i--;
  }
  for (let k: number = 1; k < nums.length - i; k++) {
    for (let j: number = i; j < nums.length - k; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
}
