/**
 * @description 组分成 m 个非空的连续子数组各自和的最大值最小
 * @author angle
 * @date 2021-11-30
 * @export
 * @param {number[]} nums
 * @param {number} m
 * @returns {number}
 */
export function splitArray(nums: number[], m: number): number {
  let left = Math.max(...nums);
  let right = nums.reduce((prev, curr) => prev + curr, 0);
  if (m === 1) {
    return right;
  }
  if (m === nums.length) {
    return left;
  }

  while (left < right) {
    // eslint-disable-next-line no-bitwise
    const mid = left + ((right - left) >>> 1);
    let count = 1;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (sum > mid) {
        count++;
        sum = nums[i];
      }
    }
    if (count > m) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
