/**
 * @description 计算两个二进制字符串的和
 * @author angle
 * @date 2020-06-11
 * @export
 * @param {string} a 二进制字符串
 * @param {string} b 二进制字符串
 * @returns {string} 和
 */
export function addBinary(a: string, b: string): string {
  let bit: number = 0;
  let res: string = '';
  const maxLength = Math.max(a.length, b.length);
  for (let i: number = 0; i < maxLength; i++) {
    const sum: number =
      bit + (i < a.length ? +a[a.length - 1 - i] : 0) + (i < b.length ? +b[b.length - 1 - i] : 0);
    if (sum > 1) {
      res = (sum - 2).toString() + res;
      bit = 1;
    } else {
      res = sum.toString() + res;
      bit = 0;
    }
  }
  if (bit === 1) {
    res = '1' + res;
  }
  return res;
}
