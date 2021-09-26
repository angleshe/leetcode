/**
 * @description 从nums中找出并返回总和为target的元素组合的个数。
 * @author angle
 * @date 2021-09-26
 * @export
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
export function combinationSum4(nums: number[], target: number): number {
  const dp: number[] = [1];
  for (let i: number = 1; i <= target; i++) {
    let count: number = 0;
    nums.forEach((num) => {
      if (num === i) {
        count++;
      } else if (num < i) {
        count += dp[i - num];
      }
    });
    dp.push(count);
  }
  return dp[target];
}
