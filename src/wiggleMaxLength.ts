/**
 * @description 返回nums中作为摆动序列的最长子序列的长度
 * @author angle
 * @date 2021-09-24
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function wiggleMaxLength(nums: number[]): number {
  if (nums.length < 2) {
    return nums.length;
  }
  let res: number = 1;
  let prevDiff: number = 0;
  let currDiff: number = 0;
  for (let i: number = 1; i < nums.length; i++) {
    currDiff = nums[i] - nums[i - 1];
    if ((currDiff < 0 && prevDiff >= 0) || (currDiff > 0 && prevDiff <= 0)) {
      res++;
      prevDiff = currDiff;
    }
  }
  return res;
}
