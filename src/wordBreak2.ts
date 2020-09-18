function dfs(
  s: string,
  wordSet: Set<string>,
  cacheSet: Set<number>,
  index: number,
  res: string[]
): boolean {
  if (index < s.length) {
    let can: boolean = false;
    for (let i: number = index; i < s.length; i++) {
      if (!cacheSet.has(s.length - i - 1)) {
        if (wordSet.has(s.substring(index, i + 1))) {
          if (i + 1 === s.length) {
            res.push(s);
            return true;
          }
          const str: string = s.slice(0, i + 1) + ' ' + s.slice(i + 1);
          const val: boolean = dfs(str, wordSet, cacheSet, i + 2, res);
          if (val) {
            can = true;
          } else {
            cacheSet.add(s.length - i - 1);
          }
        }
      }
    }
    return can;
  }
  return false;
}
/**
 * @description 在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子
 * @author angle
 * @date 2020-09-18
 * @export
 * @param {string} s
 * @param {string[]} wordDict 词典
 * @returns {string[]}
 */
export function wordBreak(s: string, wordDict: string[]): string[] {
  const res: string[] = [];
  dfs(s, new Set<string>(wordDict), new Set<number>(), 0, res);
  return res;
}
