/**
 * @description 返回 将n拆分为至少两个正整数的和最大乘积
 * @author angle
 * @date 2021-05-28
 * @export
 * @param {number} n
 * @returns {number}
 */
export function integerBreak(n: number): number {
  if (n > 3) {
    const a = Math.floor(n / 3);
    const b = n % 3;
    if (b === 0) {
      return 3 ** a;
    } else if (b === 1) {
      return 3 ** (a - 1) * 4;
    }
    return 3 ** a * 2;
  }
  return n - 1;
}
