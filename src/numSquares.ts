/**
 * @description 组成和为n完全平方数最少个数
 * @author angle
 * @date 2021-02-20
 * @export
 * @param {number} n
 * @returns {number}
 */
export function numSquares(n: number): number {
  if (n < 1) {
    return 0;
  }
  const dp: number[] = [0];
  for (let i: number = 1; i <= n; i++) {
    dp.push(i);
    for (let j: number = 2; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
}
