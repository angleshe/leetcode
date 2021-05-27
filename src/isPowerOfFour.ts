/**
 * @description 判断它是否是 4 的幂次方
 * @author angle
 * @date 2021-05-27
 * @export
 * @param {number} n
 * @returns {boolean}
 */
export function isPowerOfFour(n: number): boolean {
  // eslint-disable-next-line no-bitwise
  return n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0;
}
