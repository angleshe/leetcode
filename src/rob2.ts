function _rob(nums: number[]): number {
  for (let i: number = 1; i < nums.length; i++) {
    if (i === 1) {
      nums[1] = Math.max(nums[0], nums[1]);
    } else {
      nums[i] = Math.max(nums[i - 1], nums[i - 2] + nums[i]);
    }
  }
  return nums[nums.length - 1];
}
/**
 * @description 触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额
 * @author angle
 * @date 2020-11-26
 * @export
 * @param {number[]} nums 每个房屋存放金额,如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。 所有的房屋都围成一圈
 * @returns {number}
 */
export function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  return Math.max(_rob(nums.slice(0, nums.length - 1)), _rob(nums.slice(1)));
}
