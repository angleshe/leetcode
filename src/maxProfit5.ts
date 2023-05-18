/**
 * @description 选择某一天买入这只股票，并选择在未来的某一个不同的日子卖出该股票的最大收益
 * @author angle
 * @date 2023-05-18
 * @export
 * @param {number[]} prices
 * @returns {number}
 */
export function maxProfit(prices: number[]): number {
  let res: number = 0;
  let maxValue: number = -Infinity;

  for (let i = prices.length - 1; i >= 0; i--) {
    const price = prices[i];
    res = Math.max(res, maxValue - price);
    maxValue = Math.max(maxValue, price);
  }

  return res;
}
