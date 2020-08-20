/**
 * @description 生成杨辉三角的前 numRows 行结果集
 * @author angle
 * @date 2020-08-20
 * @export
 * @param {number} numRows
 * @returns {number[][]}
 */
export function generate(numRows: number): number[][] {
  const res: number[][] = [];
  for (let i: number = 1; i <= numRows; i++) {
    const values: number[] = [];
    for (let j: number = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        values.push(1);
      } else {
        values.push(res[i - 2][j - 1] + res[i - 2][j]);
      }
    }
    res.push(values);
  }
  return res;
}
