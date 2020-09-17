function dfs(s: string, wordSet: Set<string>, start: number, cacheSet: Set<number>): boolean {
  const str: string = s.substring(start);
  if (wordSet.has(str)) {
    return true;
  }

  for (let i: number = start; i < s.length; i++) {
    if (!cacheSet.has(i + 1) && wordSet.has(s.substring(start, i + 1))) {
      if (dfs(s, wordSet, i + 1, cacheSet)) {
        return true;
      }
      cacheSet.add(i + 1);
    }
  }
  return false;
}
/**
 * @description 判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词
 * @author angle
 * @date 2020-09-17
 * @export
 * @param {string} s
 * @param {string[]} wordDict 字典
 * @returns {boolean}
 */
export function wordBreak(s: string, wordDict: string[]): boolean {
  return dfs(s, new Set<string>(wordDict), 0, new Set<number>());
}
