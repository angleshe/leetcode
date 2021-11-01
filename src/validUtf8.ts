/* eslint-disable no-bitwise */
/**
 * @description 返回数据的整数数组是否为有效的 utf-8 编码
 * @author angle
 * @date 2021-11-01
 * @export
 * @param {number[]} data
 * @returns {boolean}
 */
export function validUtf8(data: number[]): boolean {
  if (data.length) {
    let i: number = 0;
    while (i < data.length) {
      const target: number = data[i];
      let mask: number = 1 << 7;
      let bitCount: number = 0;
      while (target & mask) {
        bitCount++;
        mask >>= 1;
        if (bitCount > 4) {
          return false;
        }
      }
      if (bitCount) {
        const lastIndex = i + bitCount;
        if (bitCount === 1 || lastIndex > data.length) {
          return false;
        }
        for (i += 1; i < lastIndex; i++) {
          if (!(data[i] & (1 << 7) && (data[i] & (1 << 6)) === 0)) {
            return false;
          }
        }
      } else {
        i++;
      }
    }
  }
  return true;
}
