/**
 * @description 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到 n 阶楼顶
 * @author angle
 * @date 2020-06-16
 * @export
 * @param {number} n 阶数
 * @returns {number} 多少种方法
 */
export function climbStairs(n: number): number {
  const dp: number[] = [];
  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      dp.push(1);
    } else {
      dp.push(dp[i - 1] + dp[i - 2]);
    }
  }
  return dp[n];
}
