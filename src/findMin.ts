/**
 * @description 找出按照升序排序的数组在预先未知的某个点上进行了旋转其中最小的元素
 * @author angle
 * @date 2020-10-08
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function findMin(nums: number[]): number {
  for (let i: number = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return nums[i];
    }
  }
  return nums[0];
}
