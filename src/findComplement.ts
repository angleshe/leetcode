/* eslint-disable no-bitwise */
/**
 * @description 输出整数 num的补数
 * @author angle
 * @date 21/02/2022
 * @export
 * @param {number} num
 * @return {*}  {number}
 */
export function findComplement(num: number): number {
  let heighBit: number = 30;
  while (heighBit >= 0 && (num & (1 << heighBit)) === 0) {
    heighBit--;
  }
  return num ^ (heighBit === 30 ? 0x7fffffff : (1 << (heighBit + 1)) - 1);
}
