/**
 * @description 各位平方和
 * @author angle
 * @date 2020-11-06
 * @export
 * @param {number} n
 * @returns {number}
 */
export function bitSquareSum(n: number): number {
  let res: number = 0;
  while (n) {
    const bit = n % 10;
    res += bit * bit;
    n = Math.floor(n / 10);
  }
  return res;
}
/**
 * @description 判断一个数 n 是不是快乐数
 * @author angle
 * @date 2020-11-06
 * @export
 * @param {number} n
 * @returns {boolean}
 */
export function isHappy(n: number): boolean {
  let slow: number = n;
  let fast: number = n;
  do {
    slow = bitSquareSum(slow);
    fast = bitSquareSum(fast);
    fast = bitSquareSum(fast);
  } while (slow !== fast);
  return fast === 1;
}
