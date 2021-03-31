/**
 * @description 除字符串中重复的字母返回结果的字典序最小
 * @author angle
 * @date 2021-03-31
 * @export
 * @param {string} s
 * @returns {string}
 */
export function removeDuplicateLetters(s: string): string {
  const map: Map<string, number> = new Map<string, number>();

  for (let i: number = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i])! + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  const inStack: Map<string, boolean> = new Map<string, boolean>();
  const stack: string[] = [];
  for (let i: number = 0; i < s.length; i++) {
    const count = map.get(s[i])! - 1;
    map.set(s[i], count);
    if (!inStack.get(s[i])) {
      while (
        stack.length &&
        stack[stack.length - 1].charCodeAt(0) > s.charCodeAt(i) &&
        map.get(stack[stack.length - 1])! > 0
      ) {
        const target = stack.pop()!;
        inStack.set(target, false);
      }
      stack.push(s[i]);
      inStack.set(s[i], true);
    }
  }

  return stack.join('');
}
