export class NumMatrix {
  private data: number[][] = [];
  constructor(matrix: number[][]) {
    for (let i: number = 0; i < matrix.length; i++) {
      const arr: number[] = [];
      for (let j: number = 0; j < matrix[i].length; j++) {
        if (i === 0) {
          if (j === 0) {
            arr.push(matrix[0][0]);
          } else {
            arr.push(arr[j - 1] + matrix[0][j]);
          }
        } else {
          if (j === 0) {
            arr.push(this.data[i - 1][0] + matrix[i][0]);
          } else {
            arr.push(this.data[i - 1][j] + arr[j - 1] - this.data[i - 1][j - 1] + matrix[i][j]);
          }
        }
      }
      this.data.push(arr);
    }
  }

  /**
   * @description 给定一个二维矩阵，计算左上角为 (row1, col1),右下角为 (row2, col2)子矩形范围内元素的总和
   * @author angle
   * @date 2021-03-15
   * @param {number} row1
   * @param {number} col1
   * @param {number} row2
   * @param {number} col2
   * @returns {number}
   * @memberof NumMatrix
   */
  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    const topRegion = row1 === 0 ? 0 : this.data[row1 - 1][col2];
    const leftRegion = col1 === 0 ? 0 : this.data[row2][col1 - 1];
    const leftTopRegion = row1 === 0 || col1 === 0 ? 0 : this.data[row1 - 1][col1 - 1];

    return this.data[row2][col2] - topRegion - leftRegion + leftTopRegion;
  }
}
