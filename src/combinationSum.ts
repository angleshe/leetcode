/**
 * @description 找出 candidates 中所有可以使数字和为 target 的组合。
 * @author angle
 * @date 2020-04-26
 * @export
 * @param {number[]} candidates 参考数组
 * @param {number} target 目标值
 * @param {number[]} path 当前路径
 * @param {number[][]} res 结果集
 */
export function dfs(candidates: number[], target: number, path: number[], res: number[][]): void {
  if (target === 0) {
    res.push([...path]);
  } else {
    for (let i = 0; i < candidates.length; i++) {
      const num: number = target - candidates[i];
      if (num < 0) {
        break;
      }
      path.push(candidates[i]);
      dfs(candidates.slice(i), num, path, res);
      path.pop();
    }
  }
}
/**
 * @description 找出 candidates 中所有可以使数字和为 target 的组合。
 * @author angle
 * @date 2020-04-26
 * @export
 * @param {number[]} candidates 参考数组
 * @param {number} target 目标值
 * @returns {number[][]} 结果集
 */
export function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const list: number[] = candidates.sort((a, b) => a - b);
  const path: number[] = [];
  dfs(list, target, path, res);
  return res;
}
