function dfs(k: number, n: number, start: number, res: number[][], path: number[]): void {
  if (k === 0 && n === 0) {
    res.push([...path]);
  } else if (k > 0 && n > 0) {
    for (let i: number = start; i <= 10 - k; i++) {
      if (n - i >= 0) {
        path.push(i);
        dfs(k - 1, n - i, i + 1, res, path);
        path.pop();
      } else {
        break;
      }
    }
  }
}
/**
 * @description 找出所有 1 - 9 的正整数相加之和为 n 的 k 个数的组合
 * @author angle
 * @date 2020-12-15
 * @export
 * @param {number} k
 * @param {number} n
 * @returns {number[][]}
 */
export function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = [];
  if (k >= 0 && n >= 0 && ((19 - k) * k) / 2 >= n) {
    dfs(k, n, 1, res, []);
  }
  return res;
}
