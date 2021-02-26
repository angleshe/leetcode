/**
 * @description 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），找出唯一一个重复的整数。
 * @author angle
 * @date 2021-02-26
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function findDuplicate(nums: number[]): number {
  let left: number = 1;
  let right: number = nums.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const count = nums.reduce<number>((prev, curr) => {
      return curr <= mid ? prev + 1 : prev;
    }, 0);
    if (count > mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
