/**
 * @description 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格, 你不能同时参与多笔交易,卖出股票后，你无法在第二天买入股票,计算最大利润
 * @author angle
 * @date 2021-03-22
 * @export
 * @param {number[]} prices
 * @returns {number}
 */
export function maxProfit(prices: number[]): number {
  const dp: Array<[number, number, number]> = [];
  for (let i: number = 0; i < prices.length; i++) {
    if (i === 0) {
      dp.push([0, -prices[i], 0]);
    } else {
      dp.push([
        Math.max(dp[i - 1][0], dp[i - 1][2]),
        Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]),
        dp[i - 1][1] + prices[i]
      ]);
    }
  }
  return Math.max(dp[dp.length - 1][0], dp[dp.length - 1][2]);
}
