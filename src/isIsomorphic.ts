/**
 * @description 给定两个字符串 s 和 t，判断它们是否是同构的。
 * @author angle
 * @date 2020-11-12
 * @export
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function _isIsomorphic(s: string, t: string): boolean {
  const wordMap: Map<string, string> = new Map<string, string>();
  for (let i: number = 0; i < s.length; i++) {
    if (wordMap.has(s[i])) {
      if (wordMap.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      wordMap.set(s[i], t[i]);
    }
  }
  return true;
}
export function isIsomorphic(s: string, t: string): boolean {
  return _isIsomorphic(s, t) && _isIsomorphic(t, s);
}
