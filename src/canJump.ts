/**
 * @description 你最初位于数组的第一个位置。数组中的每个元素代表你在该位置可以跳跃的最大长度。判断你是否能够到达最后一个位置
 * @author angle
 * @date 2020-05-27
 * @export
 * @param {number[]} nums 跳跃数组
 * @returns {boolean} 是否能到达最后
 */
export function canJump(nums: number[]): boolean {
  let maxJump: number = 0;
  for (let i: number = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0 && maxJump <= i) {
      return false;
    }
    maxJump = Math.max(maxJump, i + nums[i]);
    if (maxJump >= nums.length - 1) {
      break;
    }
  }
  return true;
}
