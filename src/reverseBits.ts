/* eslint-disable no-bitwise */
/**
 * @description 颠倒给定的 32 位无符号整数的二进制位。
 * @author angle
 * @date 2020-10-29
 * @export
 * @param {number} n
 * @returns {number}
 */
export function reverseBits(n: number): number {
  let res: number = 0;
  for (let i: number = 31; i >= 0; i--) {
    res |= ((n >> (31 - i)) & 1) << i;
  }
  return res >>> 0;
}
