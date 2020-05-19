function _permuteUnique(nums: number[], path: number[], res: number[][]): void {
  if (nums.length === 0) {
    res.push([...path]);
  } else {
    for (let i: number = 0; i < nums.length; i++) {
      if (i === 0 || nums[i] !== nums[i - 1]) {
        path.push(nums.splice(i, 1)[0]);
        _permuteUnique(nums, path, res);
        nums.splice(i, 0, path.pop() as number);
      }
    }
  }
}
/**
 * @description 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * @author angle
 * @date 2020-05-19
 * @export
 * @param {number[]} nums 数据源
 * @returns {number[][]} 全排列
 */
export function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  _permuteUnique(
    nums.sort((a, b) => a - b),
    [],
    res
  );
  return res;
}
