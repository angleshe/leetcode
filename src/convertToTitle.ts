/**
 * @description 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 * @author angle
 * @date 2020-10-18
 * @export
 * @param {number} n
 * @returns {string}
 */
export function convertToTitle(n: number): string {
  let res: string = '';
  while (n) {
    const code: number = n % 26;
    res = String.fromCharCode('A'.charCodeAt(0) + (code === 0 ? 25 : code - 1)) + res;
    n = Math.floor((code === 0 ? n - 1 : n) / 26);
  }
  return res;
}
