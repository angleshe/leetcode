/**
 * @descriptionn 找出 candidates 中所有可以使数字和为 target 的组合 candidates 中的每个数字在每个组合中只能使用一次。 解集不能包含重复的组合.
 * @author angle
 * @date 2020-04-27
 * @param {number[]} candidates 参考数组
 * @param {number} target 目标值
 * @param {number} index 遍历索引
 * @param {number[]} path 当前路径
 * @param {number[][]} res 结果集
 */
function dfs(
  candidates: number[],
  target: number,
  index: number,
  path: number[],
  res: number[][]
): void {
  if (target === 0) {
    res.push([...path]);
  } else if (target > 0) {
    for (let i = index; i < candidates.length; i++) {
      const num: number = target - candidates[i];
      if (num < 0) {
        break;
      }
      if (i === index || candidates[i] !== candidates[i - 1]) {
        path.push(candidates[i]);
        dfs(candidates, num, i + 1, path, res);
        path.pop();
      }
    }
  }
}
/**
 * @description 找出 candidates 中所有可以使数字和为 target 的组合 candidates 中的每个数字在每个组合中只能使用一次。 解集不能包含重复的组合.
 * @author angle
 * @date 2020-04-27
 * @export
 * @param {number[]} candidates 参考数组
 * @param {number} target 目标值
 * @returns {number[][]} 结果集
 */
export function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  dfs(
    candidates.sort((a, b) => a - b),
    target,
    0,
    [],
    res
  );
  return res;
}
