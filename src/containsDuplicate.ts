/**
 * @description 判断整数数组是否存在重复元素
 * @author angle
 * @date 2020-12-16
 * @export
 * @param {number[]} nums
 * @returns {boolean}
 */
export function containsDuplicate(nums: number[]): boolean {
  const hash: Record<number, boolean> = {};
  return nums.some((item) => {
    if (hash[item]) {
      return true;
    }
    hash[item] = true;
    return false;
  });
}
