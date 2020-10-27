/**
 * @description 计算你所能获取的最大利润。你最多可以完成 k 笔交易
 * @author angle
 * @date 2020-10-27
 * @export
 * @param {number} k
 * @param {number[]} prices
 * @returns {number}
 */
export function maxProfit(k: number, prices: number[]): number {
  if (prices.length < 2 || k < 1) {
    return 0;
  }
  if (k >= prices.length / 2) {
    let dp0: number = 0;
    let dp1: number = -prices[0];
    for (let i: number = 1; i < prices.length; i++) {
      const oldDp0 = dp0;
      dp0 = Math.max(dp0, dp1 + prices[i]);
      dp1 = Math.max(dp1, oldDp0 - prices[i]);
    }
    return dp0;
  }
  const dp: number[][] = [];
  for (let j: number = 0; j <= k; j++) {
    dp.push([0, -prices[0]]);
  }
  for (let i: number = 1; i < prices.length; i++) {
    for (let j: number = 1; j <= k; j++) {
      dp[j][0] = Math.max(dp[j][0], dp[j][1] + prices[i]);
      dp[j][1] = Math.max(dp[j][1], dp[j - 1][0] - prices[i]);
    }
  }
  return dp[k][0];
}
