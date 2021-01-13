/**
 * @description 判断是否是 2 的幂次方
 * @author angle
 * @date 2021-01-12
 * @export
 * @param {number} n
 * @returns {boolean}
 */
export function isPowerOfTwo(n: number): boolean {
  // eslint-disable-next-line no-bitwise
  return n > 0 && (n & (n - 1)) === 0;
}
