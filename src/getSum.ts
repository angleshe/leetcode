/* eslint-disable no-bitwise */
/**
 * @description 不使用运算符‘+’、‘-’计算俩个整数和
 * @author angle
 * @date 2021-08-24
 * @export
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function getSum(a: number, b: number): number {
  while (b) {
    const x = (a & b) << 1;
    a = a ^ b;
    b = x;
  }
  return a;
}
