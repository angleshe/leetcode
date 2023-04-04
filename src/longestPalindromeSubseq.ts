function getPalindromeMaxLength(
  s: string,
  left: number,
  right: number,
  cache: Map<string, number>
): number {
  let res: number = 0;
  const key = `${left}-${right}`;
  if (left >= 0 && right < s.length) {
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    if (s[left] === s[right]) {
      res = 2 + getPalindromeMaxLength(s, left - 1, right + 1, cache);
    } else {
      const len1 = getPalindromeMaxLength(s, left, right + 1, cache);
      const len2 = getPalindromeMaxLength(s, left - 1, right, cache);
      const len3 = getPalindromeMaxLength(s, left - 1, right + 1, cache);
      res = Math.max(len1, len2, len3);
    }
  }
  cache.set(key, res);
  return res;
}

export function longestPalindromeSubseq(s: string): number {
  let res: number = 0;
  const cache = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    res = Math.max(
      res,
      1 + getPalindromeMaxLength(s, i - 1, i + 1, cache),
      getPalindromeMaxLength(s, i, i + 1, cache)
    );
  }

  return res;
}
