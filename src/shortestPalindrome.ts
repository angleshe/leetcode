/**
 * @description 在字符串前面添加最短字符将其转换为回文串
 * @author angle
 * @date 2020-12-11
 * @export
 * @param {string} s
 * @returns {string} 最短回文串
 */
export function shortestPalindrome(s: string): string {
  const dp: number[] = [];
  const vec: Array<string | null> = [null];
  for (let i: number = 0; i < s.length; i++) {
    vec.push(s[i], null);
  }
  let L: number = 0;
  let R: number = -1;
  for (let i: number = 0; i < vec.length; i++) {
    let len: number = 0;
    if (i <= R) {
      len = Math.min((R - i) * 2 + 1, dp[R - i + L]);
    } else {
      len = 1;
    }
    let l: number = i - Math.floor(len / 2) - 1;
    let r: number = i + Math.floor(len / 2) + 1;
    while (l >= 0 && r < vec.length && vec[l] === vec[r]) {
      r++;
      l--;
    }
    dp.push(r - l - 1);
    if (r > R) {
      L = l + 1;
      R = r - 1;
    }
  }
  for (let i: number = s.length - 1; i >= 0; i--) {
    const mid = i + 1;
    if (mid >= 0 && mid < dp.length && 2 * i + 1 <= dp[mid]) {
      return (
        s
          .substr(i + 1)
          .split('')
          .reverse()
          .join('') + s
      );
    }
  }
  return '';
}
