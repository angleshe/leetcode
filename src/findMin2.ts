/**
 * @description 找出按照升序排序的数组在预先未知的某个点上进行了旋转数组最小的元素
 * @author angle
 * @date 2020-10-09
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function findMin(nums: number[]): number {
  let left: number = 0;
  let right: number = nums.length - 1;
  while (right > left) {
    const mid: number = left + Math.floor((right - left) / 2);
    if (nums[right] < nums[mid]) {
      left = mid + 1;
    } else if (nums[right] > nums[mid]) {
      right = mid;
    } else {
      right--;
    }
  }
  return nums[left];
}
