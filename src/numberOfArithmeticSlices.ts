/**
 * @description 返回数组nums中所有为等差数组的子数组个数
 * @author angle
 * @date 2021-12-02
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function numberOfArithmeticSlices(nums: number[]): number {
  let res: number = 0;
  let start: number = 0;
  let difference: number = 0;
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    if (diff === difference) {
      const count = i - start - 1;
      if (count > 0) {
        res += count;
      }
    } else {
      start = i - 1;
      difference = diff;
    }
  }
  return res;
}
