/**
 * @description pow(x, n)
 * @author angle
 * @date 2020-05-22
 * @export
 * @param {number} x 底数
 * @param {number} n 指数
 * @returns {number} 值
 */
export function myPow(x: number, n: number): number {
  if (x === 0 || x === 1 || x === -1 || n === 1) {
    return x === -1 && n % 2 === 0 ? 1 : x;
  }
  if (n === 0) {
    return 1;
  }
  let res: number = x;
  let count: number = Math.abs(n);
  let other: number = 1;
  while (count > 1) {
    if (count % 2 === 1) {
      other *= res;
    }
    count = Math.floor(count / 2);
    res *= res;
  }
  return n < 0 ? 1 / res / other : res * other;
}
