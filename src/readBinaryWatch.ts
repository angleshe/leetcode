/* eslint-disable no-bitwise */
export function count1(n: number): number {
  let res: number = 0;
  while (n) {
    if (n & 1) {
      res++;
    }
    n >>= 1;
  }
  return res;
}
/**
 * @description 二进制手表可以表示的所有可能时间
 * @author angle
 * @date 2021-11-15
 * @export
 * @param {number} turnedOn
 * @returns {string[]}
 */
export function readBinaryWatch(turnedOn: number): string[] {
  const res: string[] = [];
  for (let i: number = 0; i < 12; i++) {
    for (let j: number = 0; j < 60; j++) {
      if (count1(i) + count1(j) === turnedOn) {
        res.push(`${i}:${j > 9 ? j : '0' + j}`);
      }
    }
  }
  return res;
}
