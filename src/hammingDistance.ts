/* eslint-disable no-bitwise */
/**
 * @description 计算并返回整数 x 和 y之间的汉明距离
 * @author angle
 * @date 08/02/2022
 * @export
 * @param {number} x
 * @param {number} y
 * @return {*}  {number}
 */
export function hammingDistance(x: number, y: number): number {
  let num = x ^ y;
  let distance = 0;
  while (num) {
    distance++;
    num &= num - 1;
  }
  return distance;
}
