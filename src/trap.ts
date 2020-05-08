/**
 * @description 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * @author angle
 * @date 2020-05-07
 * @export
 * @param {number[]} height 高度数组
 * @returns {number} 总面积
 */
export function trap(height: number[]): number {
  /* 动态规划 */

  // let area: number = 0;
  // if (height.length > 2) {
  //   let maxLeft: number = height[0];
  //   let maxRight: number = height[height.length - 1];
  //   let leftIndex: number = 1;
  //   let rightIndex: number = height.length - 2;
  //   for (let i: number = 0; i < height.length - 1; i++) {
  //     if (height[leftIndex - 1] < height[rightIndex + 1]) {
  //       if (height[leftIndex] < maxLeft) {
  //         area += maxLeft - height[leftIndex];
  //       } else {
  //         maxLeft = height[leftIndex];
  //       }
  //       leftIndex++;
  //     } else {
  //       if (height[rightIndex] < maxRight) {
  //         area += maxRight - height[rightIndex];
  //       } else {
  //         maxRight = height[rightIndex];
  //       }
  //       rightIndex--;
  //     }
  //   }
  // }
  // return area;

  /* end */

  /* 栈 */
  let area: number = 0;
  if (height.length > 2) {
    const stack: number[] = [0];
    for (let i: number = 1; i < height.length; i++) {
      if (height[i] >= height[i - 1]) {
        const min: number = Math.min(height[stack[0]], height[i]);
        while (stack.length && height[stack[stack.length - 1]] <= height[i]) {
          const itemIndex: number = stack.pop() as number;
          if (stack.length === 0) {
            break;
          }
          area += (itemIndex - stack[stack.length - 1]) * (min - height[itemIndex]);
        }
      }
      stack.push(i);
    }
  }
  return area;
  /* end */
}
