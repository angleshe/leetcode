/**
 * @description 计算确保骑士每次只向右或向下移动一步,能够拯救到公主所需的最低初始健康点数
 * @author angle
 * @date 2020-10-23
 * @export
 * @param {number[][]} dungeon 骑士移动到格子所增加/减少健康点数
 * @returns {number}
 */
export function calculateMinimumHP(dungeon: number[][]): number {
  for (let i: number = dungeon.length - 1; i >= 0; i--) {
    for (let j: number = dungeon[i].length - 1; j >= 0; j--) {
      let needMin: number;
      if (i === dungeon.length - 1 && j === dungeon[dungeon.length - 1].length - 1) {
        needMin = 0;
      } else if (i === dungeon.length - 1) {
        needMin = dungeon[i][j + 1];
      } else if (j === dungeon[dungeon.length - 1].length - 1) {
        needMin = dungeon[i + 1][j];
      } else {
        needMin = Math.min(dungeon[i + 1][j], dungeon[i][j + 1]);
      }
      dungeon[i][j] = Math.max(0, needMin - dungeon[i][j]);
    }
  }
  return dungeon[0][0] + 1;
}
