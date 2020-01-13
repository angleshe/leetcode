/**
 * @description 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1
 * @author angle
 * @date 2020-01-13
 * @export
 * @param {number[]} nums 按照升序排序的数组在预先未知的某个点上进行了旋转
 * @param {number} target 目标值
 * @returns {number} 目标索引
 */
export function search(nums: number[], target: number): number {
  let lIndex: number = 0;
  let rIndex: number = nums.length - 1;
  let targetIndex: number = lIndex + Math.floor((rIndex - lIndex) / 2);
  if (nums[lIndex] === target) {
    return lIndex;
  }
  if (nums[rIndex] === target) {
    return rIndex;
  }
  while (targetIndex !== lIndex && targetIndex !== rIndex) {
    if (nums[targetIndex] === target) {
      return targetIndex;
    } else if (nums[targetIndex] > target) {
      if (nums[rIndex] > target && nums[rIndex] < nums[targetIndex]) {
        lIndex = targetIndex;
      } else {
        rIndex = targetIndex;
      }
    } else {
      if (nums[rIndex] < target && nums[rIndex] > nums[targetIndex]) {
        rIndex = targetIndex;
      } else {
        lIndex = targetIndex;
      }
    }
    targetIndex = lIndex + Math.floor((rIndex - lIndex) / 2);
  }
  return -1;
}
