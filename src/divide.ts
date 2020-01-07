/* eslint-disable no-bitwise */
/**
 * @description 将两数相除，要求不使用乘法、除法和 mod 运算符。
 * @author angle
 * @date 2020-01-07
 * @export
 * @param {number} dividend 被除数
 * @param {number} divisor 除数
 * @returns {number} 商
 */
export function divide(dividend: number, divisor: number): number {
  const INT_MAX: number = 0x7fffffff;
  const INT_MIN: number = 1 << 31;
  if (dividend === 0 || divisor === 0) {
    return 0;
  }
  const symbol: boolean = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0);
  let res: number = 0;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  if (divisor === 1) {
    res = dividend;
  } else {
    for (let i: number = 31; i >= 0; i--) {
      if (Math.abs(dividend >> i) >= divisor) {
        res += 1 << i;
        dividend -= divisor << i;
      }
    }
  }
  if (symbol) {
    return res > INT_MAX ? INT_MAX : res;
  }
  return -res < INT_MIN ? INT_MIN : -res;
}
