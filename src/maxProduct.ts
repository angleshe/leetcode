/**
 * @description 乘积最大的连续子数组所对应的乘积
 * @author angle
 * @date 2020-10-06
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function maxProduct(nums: number[]): number {
  let max: number = -Infinity;
  let iMax: number = 1;
  let iMin: number = 1;
  nums.forEach((item) => {
    if (item < 0) {
      [iMax, iMin] = [iMin, iMax];
    }
    iMax = Math.max(iMax * item, item);
    iMin = Math.min(iMin * item, item);
    max = Math.max(max, iMax);
  });
  return max;
}
