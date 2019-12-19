/**
 * @description 判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 * @author angle
 * @date 2019-12-19
 * @export
 * @param {number[]} nums 给定数组
 * @returns {number[][]} 符合的数组
 */
export function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  nums = nums.sort((a: number, b: number) => a - b);
  for (let i: number = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l: number = i + 1;
    let r: number = nums.length - 1;
    while (l < r) {
      const sum: number = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
      } else {
        r--;
      }
    }
  }
  return res;
}
