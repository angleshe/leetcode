/**
 * @description 找到数组峰值元素并返回其索引
 * @author angle
 * @date 2020-10-12
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function findPeakElement(nums: number[]): number {
  let left: number = 0;
  let right: number = nums.length;
  while (left !== right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
