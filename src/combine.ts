function _combine(n: number, path: number[], res: number[][], k: number, index: number): void {
  if (n - index >= k) {
    if (k === 0) {
      res.push([...path]);
    } else {
      for (let i: number = index; i < n; i++) {
        path.push(i + 1);
        _combine(n, path, res, k - 1, i + 1);
        path.pop();
      }
    }
  }
}
/**
 * @description 返回 1 ... n 中所有可能的 k 个数的组合
 * @author angle
 * @date 2020-06-27
 * @export
 * @param {number} n
 * @param {number} k
 * @returns {number[][]}结果集
 */
export function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  _combine(n, [], res, k, 0);
  return res;
}
