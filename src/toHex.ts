/* eslint-disable no-bitwise */
/**
 * @description 将num转换为十六进制数
 * @author angle
 * @date 2021-11-19
 * @export
 * @param {number} num
 * @returns {string}
 */
export function toHex(num: number): string {
  if (num) {
    let res: string = '';
    const zeroCode = '0'.charCodeAt(0);
    const aCode = 'a'.charCodeAt(0);
    while (num) {
      const n = num & 0b1111;
      res = String.fromCharCode(n > 9 ? aCode + n - 10 : zeroCode + n) + res;
      num >>>= 4;
    }
    return res;
  }
  return '0';
}
