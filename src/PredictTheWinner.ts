function dfs(nums: number[], left: number, right: number, cache: Map<string, number>): number {
  if (left === right) {
    return nums[left];
  }
  const key = `${left}-${right}`;
  if (cache.has(key)) {
    return cache.get(key)!;
  }
  const a = nums[left] - dfs(nums, left + 1, right, cache);
  const b = nums[right] - dfs(nums, left, right - 1, cache);
  const res = Math.max(a, b);
  cache.set(key, res);
  return res;
}
/**
 * @description 预测赢家
 * @author angle
 * @date 2022-03-02
 * @export
 * @param {number[]} nums
 * @returns {boolean}
 */
export function PredictTheWinner(nums: number[]): boolean {
  return dfs(nums, 0, nums.length - 1, new Map<string, number>()) >= 0;
}
