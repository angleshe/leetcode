/**
 * @description 判断 s 是否为 t 的子序列
 * @author angle
 * @date 2021-10-29
 * @export
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
export function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length) {
    return false;
  }
  const aCode = 'a'.charCodeAt(0);
  const dp: number[][] = [];
  for (let i: number = t.length - 1; i >= 0; i--) {
    const pos = t.charCodeAt(i) - aCode;
    dp.unshift(
      Array.from(Array(26), (_v: undefined, k: number): number => {
        return k === pos ? i : dp.length ? dp[0][k] : t.length;
      })
    );
  }
  let index: number = -1;
  return Array.prototype.every.call<string, [(item: string) => boolean], boolean>(s, (item) => {
    index++;
    if (index >= dp.length) {
      return false;
    }
    const pos = item.charCodeAt(0) - aCode;
    index = dp[index][pos];
    return index < t.length;
  });
}
