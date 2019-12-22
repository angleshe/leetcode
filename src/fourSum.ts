/**
 * @description 给定一个包含n个整数的数组nums和一个目标值target，判断nums中是否存在四个元素a，b，c和d，使得a + b + c + d的值与target相等？找出所有满足条件且不重复的四元组。
 * @author angle
 * @date 2019-12-23
 * @export
 * @param {number[]} nums 整数的数组
 * @param {number} target 目标值
 * @returns {number[][]} 满足条件且不重复的四元组
 */
export function fourSum(nums: number[], target: number): number[][] {
  if (nums.length < 4) {
    return [];
  }
  nums = nums.sort((a: number, b: number): number => a - b);
  const res: number[][] = [];
  for (let i: number = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j: number = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let l: number = j + 1;
      let r: number = nums.length - 1;
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum > target) {
          while (nums[r] === nums[--r] && l < r);
        } else if (sum === target) {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          while (nums[r] === nums[--r] && l < r);
          while (nums[l] === nums[++l] && l < r);
        } else {
          while (nums[l] === nums[++l] && l < r);
        }
      }
    }
  }
  return res;
}
