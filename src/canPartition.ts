/**
 * @description 判断是否可以将这个数组分割成两个和相等的子集
 * @author angle
 * @date 2021-12-10
 * @export
 * @param {number[]} nums
 * @returns {boolean}
 */
export function canPartition(nums: number[]): boolean {
  const count = nums.reduce((prev, curr) => prev + curr, 0);
  // eslint-disable-next-line no-bitwise
  if (count & 1) {
    return false;
  }
  // eslint-disable-next-line no-bitwise
  const target = count >>> 1;

  const dp: boolean[] = Array(target + 1).fill(false);
  dp[nums[0]] = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === target) {
      return true;
    }
    if (nums[i] > target) {
      return false;
    }
    for (let j = target; j >= 0; j--) {
      if (j > nums[i]) {
        dp[j] = dp[j] || dp[j - nums[i]];
      }
    }
    if (dp[target]) {
      return true;
    }
  }
  return false;
}
