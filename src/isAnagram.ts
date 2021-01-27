/**
 * @description 判断 t 是否是 s 的字母异位词
 * @author angle
 * @date 2021-01-27
 * @export
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const hash: Record<string, number> = {};
  for (let i: number = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash[s[i]]++;
    } else {
      hash[s[i]] = 1;
    }
  }

  for (let i: number = 0; i < t.length; i++) {
    if (hash[t[i]]) {
      hash[t[i]]--;
    } else {
      return false;
    }
  }
  return true;
}
