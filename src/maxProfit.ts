/**
 * @description 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格, 计算你所能获取的最大利润
 * @author angle
 * @date 2020-08-23
 * @export
 * @param {number[]} prices
 * @returns {number}
 */
export function maxProfit(prices: number[]): number {
  let res: number = 0;
  let left: number = -1;
  for (let i: number = 1; i < prices.length; i++) {
    if (left === -1 && prices[i] > prices[i - 1]) {
      left = prices[i - 1];
    } else if (left !== -1 && prices[i] < prices[i - 1]) {
      res += prices[i - 1] - left;
      left = -1;
    }
    if (left !== -1 && i === prices.length - 1) {
      res += prices[i] - left;
    }
  }
  return res;
}
