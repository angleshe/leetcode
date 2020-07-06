/**
 * @description 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。求在该柱状图中，能够勾勒出来的矩形的最大面积。
 * @author angle
 * @date 2020-07-06
 * @export
 * @param {number[]} heights 柱子高度集合
 * @returns {number} 能够勾勒出来的矩形的最大面积
 */
export function largestRectangleArea(heights: number[]): number {
  let maxArea: number = 0;
  if (heights.length > 0) {
    const stack: number[] = [0];
    for (let i: number = 1; i < heights.length; i++) {
      const stackTopHeight: number = heights[stack[stack.length - 1]];
      if (heights[i] === heights[stack[stack.length - 1]]) {
        stack.pop();
      }
      if (heights[i] < stackTopHeight) {
        while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
          if (heights[i] === heights[stack[stack.length - 1]]) {
            stack.pop();
          } else {
            const targetHeight: number = heights[stack[stack.length - 1]];
            stack.pop();
            maxArea = Math.max(
              maxArea,
              targetHeight * (i - (stack.length ? stack[stack.length - 1] + 1 : 0))
            );
          }
        }
      }
      stack.push(i);
    }
    while (stack.length) {
      const stackTopHeight: number = heights[stack[stack.length - 1]];
      stack.pop();
      maxArea = Math.max(
        maxArea,
        stackTopHeight * (heights.length - (stack.length ? stack[stack.length - 1] + 1 : 0))
      );
    }
  }
  return maxArea;
}
