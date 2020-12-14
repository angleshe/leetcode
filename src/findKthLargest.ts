function partition(nums: number[], left: number, right: number): number {
  const pivot = nums[left];
  let j = left;
  for (let i = left + 1; i <= right; i++) {
    if (nums[i] < pivot) {
      j++;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  [nums[left], nums[j]] = [nums[j], nums[left]];
  return j;
}
/**
 * @description 数组排序后的第 k 个最大的元素git
 * @author angle
 * @date 2020-12-14
 * @export
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
export function findKthLargest(nums: number[], k: number): number {
  const target = nums.length - k;
  let left = 0;
  let right = nums.length - 1;
  while (right > left) {
    const index = partition(nums, left, right);
    if (index === target) {
      return nums[index];
    } else if (index > target) {
      right = index - 1;
    } else {
      left = index + 1;
    }
  }
  return nums[left];
}
