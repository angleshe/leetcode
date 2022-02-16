/**
 * @description 找出并返回words中的所有连接词
 * @author angle
 * @date 16/02/2022
 * @export
 * @param {string[]} words
 * @return {*}  {string[]}
 */
export function findAllConcatenatedWordsInADict(words: string[]): string[] {
  const set = new Set<string>(words);
  return words.reduce<string[]>((prev, curr) => {
    if (curr.length) {
      const dp = Array<number>(curr.length + 1).fill(-1);
      dp[0] = 0;
      for (let i = 0; i <= curr.length; i++) {
        if (dp[i] !== -1) {
          let key: string = '';
          for (let j = i + 1; j <= curr.length; j++) {
            key += curr[j - 1];
            if (set.has(key)) {
              dp[j] = Math.max(dp[i] + 1, dp[j]);
            }
          }
          if (dp[curr.length] > 1) {
            prev.push(curr);
            return prev;
          }
        }
      }
    }

    return prev;
  }, []);
}
