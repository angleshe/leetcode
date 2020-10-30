/* eslint-disable no-bitwise */
/**
 * @description 输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数
 * @author angle
 * @date 2020-10-30
 * @export
 * @param {number} n
 * @returns {number}
 */
export function hammingWeight(n: number): number {
  let res: number = 0;
  while (n) {
    if (n & 1) {
      res++;
    }
    n >>>= 1;
  }
  return res;
}
