/**
 * @description 给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
 * @author angle
 * @date 2020-07-07
 * @export
 * @param {string[][]} matrix 二维二进制矩阵
 * @returns {number} 最大面积
 */
export function maximalRectangle(matrix: string[][]): number {
  let maxArea: number = 0;
  if (matrix.length) {
    const heights: number[] = Array<number>(matrix[0].length).fill(0);
    for (let i: number = 0; i < matrix.length; i++) {
      const stack: number[] = [];
      for (let j: number = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === '1') {
          heights[j] += 1;
        } else {
          heights[j] = 0;
        }
        if (stack.length && heights[stack[stack.length - 1]] >= heights[j]) {
          if (heights[stack[stack.length - 1]] === heights[j]) {
            stack.pop();
          } else {
            while (stack.length && heights[stack[stack.length - 1]] >= heights[j]) {
              const height: number = heights[stack.pop() as number];
              maxArea = Math.max(
                maxArea,
                height * (stack.length ? j - stack[stack.length - 1] - 1 : j)
              );
            }
          }
        }
        stack.push(j);
      }
      while (stack.length) {
        const height: number = heights[stack.pop() as number];
        maxArea = Math.max(
          maxArea,
          height * (stack.length ? heights.length - stack[stack.length - 1] - 1 : heights.length)
        );
      }
    }
  }
  return maxArea;
}
