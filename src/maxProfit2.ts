/**
 * @description 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格,计算你最多两笔交易所能获取的最大利润
 * @author angle
 * @date 2020-08-24
 * @export
 * @param {number[]} prices
 * @returns {number}
 */
export function maxProfit(prices: number[]): number {
  let pdI10: number = 0;
  let pdI11: number = -Infinity;
  let pdI20: number = 0;
  let pdI21: number = -Infinity;
  for (const price of prices) {
    pdI20 = Math.max(pdI20, pdI21 + price);
    pdI21 = Math.max(pdI21, pdI10 - price);
    pdI10 = Math.max(pdI10, pdI11 + price);
    pdI11 = Math.max(pdI11, -price);
  }
  return pdI20;
}
