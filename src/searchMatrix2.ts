/**
 * @description 搜索 m x n 矩阵 matrix 中的一个目标值 target
 * @author angle
 * @date 2021-01-25
 * @export
 * @param {number[][]} matrix 每行的元素从左到右升序排列。每列的元素从上到下升序排列。矩阵
 * @param {number} target
 * @returns {boolean}
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  let i: number = matrix.length - 1;
  let j: number = 0;
  while (i >= 0 && j < matrix[i].length) {
    if (matrix[i][j] === target) {
      return true;
    }
    if (matrix[i][j] > target) {
      i--;
    } else {
      j++;
    }
  }
  return false;
}
