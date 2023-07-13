export function countArrangement(n: number): number {
  const mask: number = 1 << n;

  const dp: number[][] = [[1]];

  for (let i = 1; i <= n; i++) {
    const arr: number[] = [];
    for (let j = 0; j < mask; j++) {
      let count: number = 0;
      for (let k = 1; k <= n; k++) {
        const m = 1 << (k - 1);
        if (j & m) {
          if (k % i === 0 || i % k === 0) {
            count += dp[i - 1][j & ~m];
          }
        }
      }
      arr.push(count);
    }

    dp.push(arr);
  }

  return dp[n][mask - 1];
}
