/**
 * @description 判断是否能赢得nim游戏
 * @author angle
 * @date 2021-03-03
 * @export
 * @param {number} n
 * @returns {boolean}
 */
export function canWinNim(n: number): boolean {
  return n % 4 !== 0;
}
