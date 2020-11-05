/* eslint-disable no-bitwise */
/**
 * @description 此范围内所有数字的按位与（包含 m, n 两端点)
 * @author angle
 * @date 2020-11-05
 * @export
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
export function rangeBitwiseAnd(m: number, n: number): number {
  while (n > m) {
    n &= n - 1;
  }
  return n;
}
