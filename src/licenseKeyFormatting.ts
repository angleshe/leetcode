/**
 * @description 密钥格式化
 * @author angle
 * @date 2022-02-27
 * @export
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */
export function licenseKeyFormatting(s: string, k: number): string {
  let res: string = '';
  let j: number = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== '-') {
      res = s[i].toUpperCase() + res;
      if (++j === k) {
        j = 0;
        res = '-' + res;
      }
    }
  }
  while (res.startsWith('-')) {
    res = res.substr(1);
  }
  return res;
}
