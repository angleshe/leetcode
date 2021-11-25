/**
 * @description 通过s中字母构造成的最长的回文串长度
 * @author angle
 * @date 2021-11-25
 * @export
 * @param {string} s
 * @returns {number}
 */
export function longestPalindrome(s: string): number {
  const map = new Map<string, number>();
  let res: number = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      const count = map.get(s[i])! + 1;
      // eslint-disable-next-line no-bitwise
      if (!(count & 1)) {
        res += 2;
      }
      map.set(s[i], count);
    } else {
      map.set(s[i], 1);
    }
  }
  return res === s.length ? res : res + 1;
}
