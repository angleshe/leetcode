/**
 * @description 请按照顺时针螺旋顺序,输出 m x n 个元素的矩阵
 * @author angle
 * @date 2020-05-26
 * @export
 * @param {number[][]} matrix 矩阵
 * @returns {number[]} 输入数组
 */
export function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) {
    return [];
  }
  const res: number[] = [];
  let t: number = 0;
  let r: number = matrix[0].length - 1;
  let b: number = matrix.length - 1;
  let l: number = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    for (let i: number = l; i <= r; i++) {
      res.push(matrix[t][i]);
    }
    if (++t > b) {
      break;
    }
    for (let i: number = t; i <= b; i++) {
      res.push(matrix[i][r]);
    }
    if (--r < l) {
      break;
    }
    for (let i: number = r; i >= l; i--) {
      res.push(matrix[b][i]);
    }
    if (--b < t) {
      break;
    }
    for (let i: number = b; i >= t; i--) {
      res.push(matrix[i][l]);
    }
    if (++l > r) {
      break;
    }
  }
  return res;
}
