/**
 * @description 查找目标值是否存在数组中
 * @author angle
 * @date 2020-07-01
 * @export
 * @param {number[]} nums 按照升序排序的数组在预先未知的某个点上进行了旋转的数组
 * @param {number} target 目标值
 * @returns {boolean} 是否在数组中
 */
export function search(nums: number[], target: number): boolean {
  if (!nums || nums.length === 0) {
    return false;
  }
  let start: number = 0;
  let end: number = nums.length - 1;
  if (nums[start] === target || nums[end] === target) {
    return true;
  }

  while (start <= end) {
    const mid: number = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return true;
    } else if (nums[start] === nums[mid]) {
      start++;
    } else if (nums[start] > nums[mid]) {
      if (target > nums[mid] && target < nums[end]) {
        start = mid;
      } else {
        end = mid;
      }
    } else if (nums[start] < nums[mid]) {
      if (target > nums[start] && target < nums[mid]) {
        end = mid;
      } else {
        start = mid;
      }
    }
  }
  return false;
}
