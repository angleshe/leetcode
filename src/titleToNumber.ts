/**
 * @description 返回Excel表格中的列名称相应的列序号
 * @author angle
 * @date 2020-10-20
 * @export
 * @param {string} s
 * @returns {number}
 */
export function titleToNumber(s: string): number {
  let sum: number = 0;
  for (let i: number = 0; i < s.length; i++) {
    sum = sum * 26 + (s.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
  }
  return sum;
}
