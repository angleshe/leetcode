/**
 * @description 返回s中所有p的异位词的子串的起始索引
 * @author angle
 * @date 2022-01-06
 * @export
 * @param {string} s
 * @param {string} p
 * @returns {number[]}
 */
export function findAnagrams(s: string, p: string): number[] {
  const res: number[] = [];
  if (p.length && s.length >= p.length) {
    const countHash: Record<string, number> = {};
    for (let i = 0; i < p.length; i++) {
      if (countHash[p[i]]) {
        countHash[p[i]]++;
      } else {
        countHash[p[i]] = 1;
      }
    }
    let hash = { ...countHash };

    let left: number = 0;
    let right: number = 0;

    while (right < s.length) {
      if (hash[s[right]] !== undefined) {
        if (hash[s[right]] === 0) {
          while (s[left] !== s[right]) {
            hash[s[left++]]++;
          }
          left++;
        } else {
          hash[s[right]]--;
        }
        right++;

        if (right - left === p.length) {
          res.push(left);
          hash[s[left++]]++;
        }
      } else {
        left = ++right;
        hash = { ...countHash };
      }
    }
  }
  return res;
}
