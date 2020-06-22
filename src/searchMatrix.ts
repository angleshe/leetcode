/**
 * @description 判断 m x n 矩阵中，是否存在一个目标值
 * @author angle
 * @date 2020-06-22
 * @export
 * @param {number[][]} matrix m x n 矩阵: 每行中的整数从左到右按升序排列,每行的第一个整数大于前一行的最后一个整数
 * @param {number} target 目标值
 * @returns {boolean} 是否存在
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0) {
    return false;
  }
  let left: number = 0;
  let right: number = matrix.length - 1;
  let arrayIndex: number = -1;
  if (matrix[left][0] > target || matrix[right][matrix[right].length - 1] < target) {
    return false;
  }
  if (
    matrix[left][0] === target ||
    matrix[left][matrix[left].length - 1] === target ||
    matrix[right][0] === target ||
    matrix[right][matrix[right].length - 1] === target
  ) {
    return true;
  }
  if (matrix[left][matrix[left].length - 1] > target) {
    arrayIndex = left;
  } else if (matrix[right][0] < target) {
    arrayIndex = right;
  }
  while (left !== right && arrayIndex === -1) {
    const targetIndex: number = Math.floor((left + right) / 2);
    if (targetIndex === left) {
      break;
    }
    if (
      matrix[targetIndex][0] === target ||
      matrix[targetIndex][matrix[targetIndex].length - 1] === target
    ) {
      return true;
    }
    if (
      matrix[targetIndex][0] < target &&
      matrix[targetIndex][matrix[targetIndex].length - 1] > target
    ) {
      arrayIndex = targetIndex;
    } else if (matrix[targetIndex][0] > target) {
      right = targetIndex;
    } else if (matrix[targetIndex][matrix[targetIndex].length - 1] < target) {
      left = targetIndex;
    }
  }
  if (arrayIndex !== -1) {
    left = 0;
    right = matrix[arrayIndex].length;
    while (left !== right) {
      const targetIndex: number = Math.floor((left + right) / 2);
      if (targetIndex === left) {
        break;
      }
      if (matrix[arrayIndex][targetIndex] === target) {
        return true;
      }
      if (matrix[arrayIndex][targetIndex] > target) {
        right = targetIndex;
      } else {
        left = targetIndex;
      }
    }
  }
  return false;
}
