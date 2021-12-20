/**
 * @description 找到最多替换k次后包含重复字母的最长子串的长度
 * @author angle
 * @date 2021-12-20
 * @export
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
export function characterReplacement(s: string, k: number): number {
  const map = new Map<string, number>();
  let left: number = 0;
  let right: number = 0;
  let max: number = 0;
  while (right < s.length) {
    const count = map.has(s[right]) ? map.get(s[right])! + 1 : 1;
    max = Math.max(count, max);
    map.set(s[right], count);
    if (right - left + 1 > max + k) {
      map.set(s[left], map.get(s[left])! - 1);
      left++;
    }
    right++;
  }
  return s.length ? right - left : 0;
}
