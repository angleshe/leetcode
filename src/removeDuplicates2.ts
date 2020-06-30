/**
 * @description 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
 * @author angle
 * @date 2020-06-30
 * @export
 * @param {number[]} nums 数组
 * @returns {number} 新数组长度
 */
export function removeDuplicates(nums: number[]): number {
  let i: number = 2;
  while (i < nums.length) {
    if (nums[i - 2] === nums[i]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
}
