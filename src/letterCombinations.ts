/**
 * @description 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。给出数字到字母的映射如下（与电话按键相同）。
 * @author angle
 * @date 2019-12-21
 * @export
 * @param {string} digits 给定的字符串
 * @returns {string []} 字母组合
 */
export function letterCombinations(digits: string): string[] {
  if (digits) {
    const digitsMap: { [key: string]: string[] } = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z']
    };
    let res: string[] = digitsMap[digits[0]];
    for (let i: number = 1; i < digits.length; i++) {
      res = res.reduce<string[]>((prev: string[], curr: string) => {
        prev = prev.concat(digitsMap[digits[i]].map((item: string): string => curr + item));
        return prev;
      }, []);
    }
    return res;
  }
  return [];
}
