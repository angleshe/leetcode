// function dfs(nums: number[], index: number = 0): number[] {
//   if (index === nums.length - 1) {
//     return [nums[index], -nums[index]];
//   }
//   return dfs(nums, index + 1).reduce<number[]>((prev, curr) => {
//     prev.push(nums[index] + curr, -nums[index] + curr);
//     return prev;
//   }, []);
// }

function dfs(
  nums: number[],
  target: number,
  index: number = 0,
  cur: number = 0,
  cache: Map<string, number> = new Map<string, number>()
): number {
  if (index === nums.length) {
    return cur === target ? 1 : 0;
  }
  const key = `${index}-${cur}`;
  if (cache.has(key)) {
    return cache.get(key)!;
  }
  const res =
    dfs(nums, target, index + 1, cur + nums[index], cache) +
    dfs(nums, target, index + 1, cur - nums[index], cache);
  cache.set(key, res);
  return res;
}
export function findTargetSumWays(nums: number[], target: number): number {
  return dfs(nums, target);
}
