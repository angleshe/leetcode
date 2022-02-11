/* eslint-disable no-bitwise */
function dfs(
  maxChoosableInteger: number,
  desiredTotal: number,
  state: number,
  cache: Map<number, boolean>
): boolean {
  if (cache.has(state)) {
    return cache.get(state)!;
  }
  for (let i = 1; i <= maxChoosableInteger; i++) {
    const bit = 1 << (i - 1);
    if ((state & bit) === 0) {
      if (i >= desiredTotal || !dfs(maxChoosableInteger, desiredTotal - i, state | bit, cache)) {
        cache.set(state, true);
        return true;
      }
    }
  }
  cache.set(state, false);
  return false;
}
/**
 * @description 先出手的玩家是否能稳赢则返回 true ，否则返回 false
 * @author angle
 * @date 11/02/2022
 * @export
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {*}  {boolean}
 */
export function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
  if (maxChoosableInteger >= desiredTotal) {
    return true;
  }
  if (((1 + maxChoosableInteger) * maxChoosableInteger) / 2 < desiredTotal) {
    return false;
  }
  return dfs(maxChoosableInteger, desiredTotal, 0, new Map<number, boolean>());
}
