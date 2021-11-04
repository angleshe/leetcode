/**
 * @description s中的每一字符出现次数都不少于 k的最长子串长度
 * @author angle
 * @date 2021-11-04
 * @export
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
export function longestSubstring(s: string, k: number): number {
  if (s.length < k) {
    return 0;
  }
  const hash = Array.prototype.reduce.call<
    string,
    [
      (prev: Record<string, number>, curr: string) => Record<string, number>,
      Record<string, number>
    ],
    Record<string, number>
  >(
    s,
    (prev, curr) => {
      if (prev[curr]) {
        prev[curr]++;
      } else {
        prev[curr] = 1;
      }
      return prev;
    },
    {}
  );
  for (const key in hash) {
    if (hash[key] < k) {
      const subStrArr = s.split(key);
      return Math.max(...subStrArr.map((item) => longestSubstring(item, k)));
    }
  }
  return s.length;
}
