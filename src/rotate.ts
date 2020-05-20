/**
 * @description  n × n 的二维矩阵顺时针旋转 90 度
 * @author angle
 * @date 2020-05-20
 * @export
 * @param {number[][]} matrix  n × n 的二维矩
 */
export function rotate(matrix: number[][]): void {
  const deep: number = Math.floor((matrix.length - 1) / 2);
  for (let i: number = 0; i <= deep; i++) {
    const count: number = matrix.length - 2 * i - 1;
    for (let j: number = 0; j < count; j++) {
      [
        matrix[i][i + j],
        matrix[i + j][matrix.length - 1 - i],
        matrix[matrix.length - 1 - i][matrix.length - 1 - i - j],
        matrix[matrix.length - 1 - i - j][i]
      ] = [
        matrix[matrix.length - 1 - i - j][i],
        matrix[i][i + j],
        matrix[i + j][matrix.length - 1 - i],
        matrix[matrix.length - 1 - i][matrix.length - 1 - i - j]
      ];
    }
  }
}
