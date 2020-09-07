/**
 * @description  s 所有可能的分割回文串子串方案
 * @author angle
 * @date 2020-09-07
 * @export
 * @param {string} s
 * @returns {string[][]}
 */
export function partition(s: string): string[][] {
  const res: string[][] = [];
  const dp: boolean[][] = [];
  for (let i: number = 0; i < s.length; i++) {
    for (let j: number = 0; j < s.length; j++) {
      const val: boolean = j <= i && s[j] === s[i] && (i - j <= 2 || dp[j + 1][i - 1]);
      if (i === 0) {
        dp.push([val]);
      } else {
        dp[j].push(val);
      }
    }
  }
  function dfs(index: number, stack: string[]): void {
    if (index === s.length) {
      res.push([...stack]);
    } else {
      for (let i: number = index; i < s.length; i++) {
        if (dp[index][i]) {
          stack.push(s.substring(index, i + 1));
          dfs(i + 1, stack);
          stack.pop();
        }
      }
    }
  }
  dfs(0, []);
  return res;
}
