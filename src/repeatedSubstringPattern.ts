/**
 * @description 检查空的字符串s是否可以通过由它的一个子串重复多次构成
 * @author angle
 * @date 2022-02-04
 * @export
 * @param {string} s
 * @returns {boolean}
 */
export function repeatedSubstringPattern(s: string): boolean {
  const next: number[] = Array(s.length).fill(-1);
  for (let i: number = 1; i < s.length; i++) {
    let j = next[i - 1];
    while (j !== -1 && s[j + 1] !== s[i]) {
      j = next[j];
    }
    if (s[j + 1] === s[i]) {
      next[i] = j + 1;
    }
  }
  return next[s.length - 1] !== -1 && s.length % (s.length - next[s.length - 1] - 1) === 0;
}
