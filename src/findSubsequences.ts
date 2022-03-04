// function dfs(
//   nums: number[],
//   startIndex: number,
//   path: number[],
//   set: Set<string>,
//   res: number[][]
// ): void {
//   if (path.length > 1) {
//     const key = path.join('');
//     if (!set.has(key)) {
//       set.add(key);
//       res.push([...path]);
//     }
//   }
//   for (let i: number = startIndex; i < nums.length; i++) {
//     if (path.length === 0 || path[path.length - 1] <= nums[i]) {
//       path.push(nums[i]);
//       dfs(nums, i + 1, path, set, res);
//       path.pop();
//     }
//   }
// }
/**
 * @description 找出并返回所有该数组中不同的递增子序列
 * @author angle
 * @date 2022-03-04
 * @export
 * @param {number[]} nums
 * @returns {number[][]}
 */
export function findSubsequences(nums: number[]): number[][] {
  const res: number[][] = [];
  const len = nums.length;
  const set = new Set<string>();
  function dfs(start: number, path: number[]): void {
    if (path.length >= 2) {
      const str = path.toString();
      if (!set.has(str)) {
        res.push(path.slice());
        set.add(str);
      }
    }
    for (let i = start; i < len; i++) {
      const prev = path[path.length - 1];
      const cur = nums[i];
      if (path.length === 0 || prev <= cur) {
        path.push(cur);
        dfs(i + 1, path);
        path.pop();
      }
    }
  }
  dfs(0, []);
  return res;
}
