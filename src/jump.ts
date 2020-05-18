/**
 * @description 给定一个非负整数数组，你最初位于数组的第一个位置。数组中的每个元素代表你在该位置可以跳跃的最大长度.求最小到达终点的步数
 * @author angle
 * @date 2020-05-15
 * @export
 * @param {number[]} nums 数组
 * @returns {number} 小到达终点的步数
 */
export function jump(nums: number[]): number {
  let step: number = 0;
  let end: number = 0;
  let max: number = 0;
  for (let i: number = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i] + i);
    if (end === i) {
      end = max;
      step++;
    }
  }
  return step;
}
