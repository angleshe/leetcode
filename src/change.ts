function dfs(
  amount: number,
  coins: number[],
  current: number,
  count: number,
  index: number,
  cache: Map<string, number> = new Map<string, number>()
): number {
  if (current > amount) {
    return count;
  }

  if (current === amount) {
    return count + 1;
  }

  const key = `${current}-${index}`;
  if (cache.has(key)) {
    return count + cache.get(key)!;
  }

  let num = 0;
  for (let i = index; i < coins.length; i++) {
    num = dfs(amount, coins, current + coins[i], num, i, cache);
  }

  cache.set(key, num);

  return count + num;
}

export function change(amount: number, coins: number[]): number {
  return dfs(amount, coins, 0, 0, 0);
}
