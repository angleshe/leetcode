/**
 * @description 杨辉三角的第 k 行的解集
 * @author angle
 * @date 2020-08-21
 * @export
 * @param {number} rowIndex
 * @returns {number[]}
 */
export function getRow(rowIndex: number): number[] {
  const res: number[] = [];
  for (let i: number = 0; i <= rowIndex; i++) {
    for (let j: number = 0; j < res.length - 1; j++) {
      res[j] = res[j] + res[j + 1];
    }
    res.splice(0, 0, 1);
  }
  return res;
}
