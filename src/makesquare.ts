/* eslint-disable no-bitwise */
function dfs(
  matchsticks: number[],
  mask: number,
  count: number,
  countLength: number,
  targetLength: number,
  cache: Map<string, boolean> = new Map<string, boolean>()
): boolean {
  const cacheKey = mask.toString() + '-' + count;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey)!;
  }

  const len = countLength % targetLength;

  if (countLength !== 0 && len === 0) {
    count++;
  }

  if (count === 3) {
    return true;
  }

  const diff = targetLength - len;

  let res: boolean = false;
  for (let i = 0; i < matchsticks.length; i++) {
    if ((mask & (1 << i)) > 0 && diff >= matchsticks[i]) {
      if (
        dfs(matchsticks, mask ^ (1 << i), count, countLength + matchsticks[i], targetLength, cache)
      ) {
        res = true;
        break;
      }
    }
  }
  cache.set(cacheKey, res);
  return res;
}
/**
 * @description 所有的火柴棍是否能拼成一个正方形
 * @author angle
 * @date 18/02/2022
 * @export
 * @param {number[]} matchsticks
 * @return {*}  {boolean}
 */
export function makesquare(matchsticks: number[]): boolean {
  const countLength = matchsticks.reduce((prev, curr) => prev + curr, 0);
  return dfs(matchsticks, (1 << matchsticks.length) - 1, 0, 0, countLength / 4);
}
