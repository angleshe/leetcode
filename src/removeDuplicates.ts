/**
 * @description 给定一个排序数组，原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * @author angle
 * @date 2020-01-02
 * @export
 * @param {number[]} nums 排序数组
 * @returns {number} 移除后新数组的长度
 */
export function removeDuplicates(nums: number[]): number {
  for (let i: number = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}
