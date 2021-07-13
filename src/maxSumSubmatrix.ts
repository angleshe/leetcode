/**
 * @description 返回矩阵内部矩形区域的不超过 k 的最大数值和。
 * @author angle
 * @date 2021-07-13
 * @export
 * @param {number[][]} matrix
 * @param {number} k
 * @returns {number}
 */
export function maxSumSubmatrix(matrix: number[][], k: number): number {
  let res: number = -Infinity;
  for (let l: number = 0; l < matrix.length; l++) {
    const rowSum: number[] = [];
    for (let r: number = l; r < matrix.length; r++) {
      for (let i: number = 0; i < matrix[l].length; i++) {
        if (r === l) {
          rowSum.push(matrix[r][i]);
        } else {
          rowSum[i] += matrix[r][i];
        }
      }

      for (let i: number = 0; i < rowSum.length; i++) {
        let sum = 0;
        for (let j: number = i; j < rowSum.length; j++) {
          sum += rowSum[j];
          if (sum === k) {
            return k;
          }
          if (sum < k && sum > res) {
            res = sum;
          }
        }
      }
    }
  }
  return res;
}
