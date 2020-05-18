function _permute(nums: number[], path: number[], res: number[][]): void {
  if (nums.length === 0) {
    res.push([...path]);
  } else {
    for (let i: number = 0; i < nums.length; i++) {
      path.push(nums.splice(i, 1)[0]);
      _permute(nums, path, res);
      nums.splice(i, 0, path.pop() as number);
    }
  }
}
/**
 * @description 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * @author angle
 * @date 2020-05-18
 * @export
 * @param {number[]} nums 数据源
 * @returns {number[][]} 全排列
 */
export function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  _permute(nums, [], res);
  return res;
}
