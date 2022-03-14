/**
 * @description 用一个数组返回这个矩阵中的所有元素
 * @author angle
 * @date 2022-03-14
 * @export
 * @param {number[][]} mat
 * @returns {number[]}
 */
export function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length;
  const n = mat[0].length;
  const res: number[] = [];
  for (let i = 0; i < m + n - 1; i++) {
    for (let j = 0; j <= i; j++) {
      if (i % 2) {
        if (j < m && i - j < n) {
          res.push(mat[j][i - j]);
        }
      } else {
        if (i - j < m && j < n) {
          res.push(mat[i - j][j]);
        }
      }
    }
  }

  return res;
}
