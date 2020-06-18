/**
 * @description 将 word1 转换成 word2 所使用的最少操作数
 * @author angle
 * @date 2020-06-18
 * @export
 * @param {string} word1
 * @param {string} word2
 * @returns {number} 最小操作次数
 */
export function minDistance(word1: string, word2: string): number {
  const dp: number[][] = [];
  for (let i: number = 0; i <= word1.length; i++) {
    for (let j: number = 0; j <= word2.length; j++) {
      if (j === 0) {
        dp.push([i]);
      } else if (i === 0) {
        dp[0].push(j);
      } else if (word1[i - 1] === word2[j - 1]) {
        dp[i].push(dp[i - 1][j - 1]);
      } else {
        dp[i].push(Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1);
      }
    }
  }
  return dp[word1.length][word2.length];
}
