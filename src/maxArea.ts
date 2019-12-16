/**
 * @description 给定 n 个非负整数 a1，a2，...,an，每个数代表坐标中的一个点(i,ai)。在坐标内画n条垂直线，垂直线i的两个端点分别为(i,ai)和(i,0)。找出其中的两条线，使得它们与x轴共同构成的容器可以容纳最多的水。
 * @author angle
 * @date 2019-12-13
 * @export
 * @param {number[]} height 高度数组
 * @returns {number}
 */
export function maxArea(height: number[]): number {
  let res: number = 0;
  let i: number = 0;
  let j: number = height.length - 1;
  while (j > i) {
    if (height[i] > height[j]) {
      res = Math.max(res, height[j] * (j - i));
      j--;
    } else {
      res = Math.max(res, height[i] * (j - i));
      i++;
    }
  }
  // for (let i = 0; i < height.length; i++) {
  //   for (let j = i + 1; j < height.length; j++) {
  //     res = Math.max((j - i) * Math.min(height[i], height[j]), res);
  //   }
  // }
  return res;
}
