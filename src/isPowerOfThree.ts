/**
 * @description 判断是否是 3 的幂次方
 * @author angle
 * @date 2021-04-25
 * @export
 * @param {number} n
 * @returns {boolean}
 */
export function isPowerOfThree(n: number): boolean {
  if (n <= 0) {
    return false;
  }
  while (n !== 1) {
    if (n % 3 === 0) {
      n = n / 3;
    } else {
      return false;
    }
  }
  return true;
}
