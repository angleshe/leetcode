/**
 * @description 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 * @author angle
 * @date 2020-01-10
 * @export
 * @param {string} s 只包含 '(' 和 ')' 的字符串
 * @returns {number} 最长的包含有效括号的子串的长度
 */
export function longestValidParentheses(s: string): number {
  const parObj: Record<number, number> = {};
  const parArr: string[] = [];
  for (let i: number = 0; i < s.length; i++) {
    if (s[i] === '(') {
      parArr.push('(');
    } else {
      if (parArr.length !== 0 && parArr[parArr.length - 1] === '(') {
        if (parObj[parArr.length]) {
          parObj[parArr.length]++;
        } else {
          parObj[parArr.length] = 1;
        }
        if (parObj[parArr.length + 1]) {
          parObj[parArr.length] += parObj[parArr.length + 1];
          parObj[parArr.length + 1] = 0;
        }
        parArr.pop();
      } else {
        parArr.push(')');
      }
    }
  }
  const lenArr: number[] = Object.values<number>(parObj);
  if (lenArr.length) {
    return Math.max(...lenArr) * 2;
  }
  return 0;
}
