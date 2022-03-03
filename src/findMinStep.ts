/* eslint-disable no-bitwise */
function dfs(board: string, hand: string, sign: number, cache: Map<string, number>): number {
  if (board.length) {
    const key = `${board}-${sign}`;
    if (cache.has(key)) {
      return cache.get(key)!;
    }

    let res: number = Infinity;
    for (let i = 0; i < hand.length; i++) {
      if ((sign & (1 << i)) === 0) {
        const next = sign | (1 << i);

        for (let j = 0; j < board.length; j++) {
          let can: boolean = false;
          if (j !== 0 && board[j] === board[j - 1] && hand[i] !== board[j]) {
            can = true;
          } else if (j !== 0 && board[j] !== board[j - 1] && hand[i] === board[j]) {
            can = true;
          } else if (j === 0 && board[j] === hand[i]) {
            can = true;
          }
          if (can) {
            let str: string = `${board.substr(0, j)}${hand[i]}${board.substr(j)}`;
            let targetIndex: number = j;
            while (str.length) {
              const target = str[targetIndex];
              let l: number = targetIndex;
              let r: number = targetIndex;
              while (l - 1 >= 0 && target === str[l - 1]) {
                l--;
              }
              while (r + 1 < str.length && target === str[r + 1]) {
                r++;
              }
              if (r - l > 1) {
                str = `${str.substring(0, l)}${str.substring(r + 1)}`;
                targetIndex = l === 0 ? 0 : l - 1;
              } else {
                break;
              }
            }
            res = Math.min(res, dfs(str, hand, next, cache) + 1);
          }
        }
      }
    }
    cache.set(key, res);

    return res;
  }
  return 0;
}
/**
 * @description 祖玛游戏
 * @author angle
 * @date 2022-03-03
 * @export
 * @param {string} board
 * @param {string} hand
 * @returns {number}
 */
export function findMinStep(board: string, hand: string): number {
  const res = dfs(board, hand, 0, new Map<string, number>());
  return res === Infinity ? -1 : res;
}
