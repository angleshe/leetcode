/**
 * @description 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 * @author angle
 * @date 2019-12-17
 * @export
 * @param {string} s 罗马数字
 * @returns {number} 整数
 */
export function romanToInt(s: string): number {
  const romanToIntMap: {
    [key: string]: number;
  } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let res: number = 0;
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && romanToIntMap[s[i]] < romanToIntMap[s[i + 1]]) {
      res += romanToIntMap[s[i + 1]] - romanToIntMap[s[i]];
      i++;
    } else {
      res += romanToIntMap[s[i]];
    }
  }
  return res;
}
