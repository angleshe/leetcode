/**
 * @description 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * @author angle
 * @date 2020-08-22
 * @export
 * @param {number[][]} triangle
 * @returns {number}
 */
export function minimumTotal(triangle: number[][]): number {
  let res: number = 0;
  for (let i: number = 0; i < triangle.length; i++) {
    for (let j: number = 0; j < triangle[i].length; j++) {
      if (i === 0) {
        res = triangle[0][0];
      } else if (j === 0) {
        triangle[i][0] = triangle[i - 1][0] + triangle[i][0];
        res = triangle[i][0];
      } else {
        if (j === triangle[i].length - 1) {
          triangle[i][j] = triangle[i - 1][j - 1] + triangle[i][j];
        } else {
          triangle[i][j] = Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]) + triangle[i][j];
        }
        res = Math.min(res, triangle[i][j]);
      }
    }
  }
  return res;
}
