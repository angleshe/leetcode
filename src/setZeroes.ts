/**
 * @description 定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。
 * @author angle
 * @date 2020-06-19
 * @export
 * @param {number[][]} matrix
 */
export function setZeroes(matrix: number[][]): void {
  let firstCol: boolean = false;
  let firstRow: boolean = false;
  if (matrix.length) {
    for (let i: number = 0; i < matrix.length; i++) {
      for (let j: number = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          if (i === 0) {
            firstRow = true;
          } else if (j === 0) {
            firstCol = true;
          } else {
            matrix[0][j] = 0;
            matrix[i][0] = 0;
          }
        }
      }
    }
    for (let j: number = 1; j < matrix[0].length; j++) {
      if (matrix[0][j] === 0) {
        for (let i: number = 1; i < matrix.length; i++) {
          matrix[i][j] = 0;
        }
      }
      if (firstRow) {
        matrix[0][j] = 0;
      }
    }

    for (let i: number = 0; i < matrix.length; i++) {
      if (matrix[i][0] === 0) {
        for (let j: number = 1; j < matrix[i].length; j++) {
          matrix[i][j] = 0;
        }
      }
      if (matrix[0][0] === 0 || firstCol) {
        matrix[i][0] = 0;
      }
    }
    if (firstRow) {
      matrix[0][0] = 0;
    }
  }
}
