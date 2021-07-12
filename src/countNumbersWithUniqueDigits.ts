/**
 * @description 计算 0 ≤ x < 10**n中各位数字都不同的数字 x 的个数
 * @author angle
 * @date 2021-07-12
 * @export
 * @param {number} n
 * @returns {number}
 */
export function countNumbersWithUniqueDigits(n: number): number {
  let dp: number = 0;
  let count: number = 0;
  for (let i: number = 2; i <= n; i++) {
    dp = dp * 10 + (9 * 10 ** (i - 2) - dp) * (i - 1);
    count += dp;
  }

  return 10 ** n - count;
}
