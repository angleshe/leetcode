/**
 * @description 从[1, n]区间内选取任意个数字补充到已排序的正整数数组nums中，使得[1, n]区间内的任何数字都可以用nums中某几个数字的和来表示,求的最少需要补充的数字个数
 * @author angle
 * @date 2021-05-07
 * @export
 * @param {number[]} nums
 * @param {number} n
 * @returns {number}
 */
export function minPatches(nums: number[], n: number): number {
  let x: number = 1;
  let index: number = 0;
  let patches: number = 0;

  while (x <= n) {
    if (index < nums.length && nums[index] <= x) {
      x += nums[index++];
    } else {
      x *= 2;
      patches++;
    }
  }
  return patches;
}
