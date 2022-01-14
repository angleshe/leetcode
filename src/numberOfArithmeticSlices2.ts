/**
 * @description nums中所有等差子序列 的数目
 * @author angle
 * @date 14/01/2022
 * @export
 * @param {number[]} nums
 * @return {*}  {number}
 */
export function numberOfArithmeticSlices(nums: number[]): number {
  const dp: Array<Record<number, number>> = [{}];
  for (let i = 1; i < nums.length; i++) {
    const targetMap: Record<number, number> = {};
    dp.push(targetMap);
    for (let j = 0; j < i; j++) {
      const d: number = nums[i] - nums[j];
      targetMap[d] = (targetMap[d] ?? 0) + (dp[j][d] ?? 0) + 1;
    }
  }
  const count = dp.reduce(
    (prev, curr) => prev + Object.values(curr).reduce((sum, item) => sum + item, 0),
    0
  );

  return count - (nums.length * (nums.length - 1)) / 2;
}
