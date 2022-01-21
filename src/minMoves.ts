/**
 * @description 让数组所有元素相等的最小操作次数。
 * @author angle
 * @date 2022-01-21
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function minMoves(nums: number[]): number {
  const { min, sum } = nums.reduce<{ min: number; sum: number }>(
    (prev, curr) => ({
      min: curr < prev.min ? curr : prev.min,
      sum: prev.sum + curr
    }),
    {
      min: Infinity,
      sum: 0
    }
  );
  return sum - min * nums.length;
}
