/**
 * @description 找出 [0, n] 这个范围内没有出现在数组中的那个数
 * @author angle
 * @date 2021-02-05
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function missingNumber(nums: number[]): number {
  return nums.reduce<number>((prev, curr, index) => index - curr + prev + 1, 0);
}
