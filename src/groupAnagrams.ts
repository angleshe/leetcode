/**
 * @description 给定一个字符串数组，将字母异位词组合在一起。
 * @author angle
 * @date 2020-05-21
 * @export
 * @param {string[]} strs 数据源
 * @returns {string[][]} 分组数据
 */
export function groupAnagrams(strs: string[]): string[][] {
  const hashMap: Record<string, string[]> = {};
  for (let i: number = 0; i < strs.length; i++) {
    const key: string = strs[i]
      .split('')
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join('');
    if (hashMap[key]) {
      hashMap[key].push(strs[i]);
    } else {
      hashMap[key] = [strs[i]];
    }
  }
  return Object.values(hashMap);
}
