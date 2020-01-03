/**
 * @description 原地移除数组 nums 所有数值等于 val 的元素，返回移除后数组的新长度。
 * @author angle
 * @date 2020-01-03
 * @export
 * @param {number[]} nums 原数组
 * @param {number} val 目标值
 * @returns {number} 移除后数组的新长度
 */
export function removeElement(nums: number[], val: number): number {
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i--, 1);
    }
  }
  return nums.length;
}
