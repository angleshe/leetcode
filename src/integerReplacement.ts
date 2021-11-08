/**
 * @description n 变为 1 所需的最小替换次数是多少
 * @author angle
 * @date 2021-11-08
 * @export
 * @param {number} n
 * @returns {number}
 */
export function integerReplacement(n: number): number {
  if (n < 2) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  if (n % 2) {
    return 1 + Math.min(integerReplacement(1 + n), integerReplacement(n - 1));
  }
  return 1 + integerReplacement(n / 2);
}
