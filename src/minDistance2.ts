export function minDistance(word1: string, word2: string): number {
  const l1 = word1.length;
  const l2 = word2.length;
  const dp: number[][] = [];
  for (let i = 0; i < l1; i++) {
    const arr: number[] = [];
    dp.push(arr);
    for (let j = 0; j < l2; j++) {
      if (word1[i] === word2[j]) {
        if (i === 0 || j === 0) {
          arr.push(1);
        } else {
          arr.push(dp[i - 1][j - 1] + 1);
        }
      } else {
        const prev1 = i === 0 ? 0 : dp[i - 1][j];
        const prev2 = j === 0 ? 0 : dp[i][j - 1];
        arr.push(Math.max(prev1, prev2));
      }
    }
  }

  return l1 + l2 - 2 * dp[l1 - 1][l2 - 1];
}
