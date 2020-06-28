function _subsets(
  nums: number[],
  path: number[],
  deep: number,
  index: number,
  res: number[][]
): void {
  if (nums.length - index >= deep) {
    if (deep === 0) {
      res.push([...path]);
    } else {
      for (let i: number = index; i < nums.length; i++) {
        path.push(nums[i]);
        _subsets(nums, path, deep - 1, i + 1, res);
        path.pop();
      }
    }
  }
}

/**
 * @description 数组所有可能的子集（幂集）
 * @author angle
 * @date 2020-06-28
 * @export
 * @param {number[]} nums
 * @returns {number[][]} 所有子集
 */
export function subsets(nums: number[]): number[][] {
  const res: number[][] = [[]];
  for (let i: number = 1; i <= nums.length; i++) {
    _subsets(nums, [], i, 0, res);
  }
  return res;
}
