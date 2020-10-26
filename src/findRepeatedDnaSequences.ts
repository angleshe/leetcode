/* eslint-disable no-bitwise */
/**
 * @description 查找目标子串，目标子串的长度为 10，且在 DNA 字符串 s 中出现次数超过一次
 * @author angle
 * @date 2020-10-26
 * @export
 * @param {string} s
 * @returns {string[]}
 */
export function findRepeatedDnaSequences(s: string): string[] {
  if (s.length > 10) {
    let key: number = 0;
    const set: Set<number> = new Set<number>();
    const res: Set<string> = new Set<string>();
    for (let i: number = 0; i < 10; i++) {
      key = key << 3;
      key |= s.charCodeAt(i) & 7;
    }
    set.add(key);
    for (let i: number = 10; i < s.length; i++) {
      key = key << 3;
      key |= s.charCodeAt(i) & 7;
      key &= 0x3fffffff;
      if (set.has(key)) {
        res.add(s.substring(i - 9, i + 1));
      } else {
        set.add(key);
      }
    }
    return [...res];
  }
  return [];
}
