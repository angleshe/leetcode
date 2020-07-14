function dfs(nums: number[], res: number[][], path: number[], len: number, index: number): void {
  if (path.length === len) {
    res.push([...path]);
  } else {
    for (let i: number = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      dfs(nums, res, path, len, i + 1);
      path.pop();
    }
  }
}
/**
 * @description 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * @author angle
 * @date 2020-07-14
 * @export
 * @param {number[]} nums
 * @returns {number[][]}
 */
export function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = [];
  nums = nums.sort((a, b) => a - b);
  for (let n: number = 0; n <= nums.length; n++) {
    dfs(nums, res, [], n, 0);
  }
  return res;
}
