/**
 * @description 计算并返回可形成 完整阶梯行 的总行数
 * @author angle
 * @date 2022-01-10
 * @export
 * @param {number} n
 * @returns {number}
 */
export function arrangeCoins(n: number): number {
  return Math.floor((Math.sqrt(1 + 8 * n) - 1) / 2);
}
