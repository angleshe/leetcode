/**
 * @description 给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串，判断字符串是否有效。有效字符串需满足：1) 左括号必须用相同类型的右括号闭合。 2) 左括号必须以正确的顺序闭合。
 * @author angle
 * @date 2019-12-24
 * @export
 * @param {string} s 测试字符串
 * @returns {boolean} 是否有效
 */
export function isValid(s: string): boolean {
  const Stack: string[] = [];
  for (let i: number = 0; i < s.length; i++) {
    if (['(', '[', '{'].includes(s[i])) {
      Stack.push(s[i]);
    } else {
      const item: string | undefined = Stack.pop();
      if (item === undefined) {
        return false;
      } else if (s[i] === ')' && item !== '(') {
        return false;
      } else if (s[i] === ']' && item !== '[') {
        return false;
      } else if (s[i] === '}' && item !== '{') {
        return false;
      }
    }
  }
  return Stack.length === 0;
}
