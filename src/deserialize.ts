import { NestedInteger } from '../model/NestedInteger';

/**
 * @description 语法分析器
 * @author angle
 * @date 2021-10-18
 * @export
 * @param {string} s
 * @returns {NestedInteger}
 */
export function deserialize(s: string): NestedInteger {
  let isNegative: boolean = false;
  let num: number | undefined;
  const stack: NestedInteger[] = [];
  for (let i: number = 0; i < s.length; i++) {
    if (['[', ']', ','].includes(s[i])) {
      if (num !== undefined) {
        stack[stack.length - 1].add(new NestedInteger(isNegative ? -num : num));
        num = undefined;
        isNegative = false;
      }
      if (s[i] === '[') {
        const node = new NestedInteger();
        if (stack.length) {
          stack[stack.length - 1].add(node);
        }
        stack.push(node);
      } else if (s[i] === ']' && i !== s.length - 1) {
        stack.pop();
      }
    } else {
      if (s[i] === '-') {
        num = 0;
        isNegative = true;
      } else {
        num = (num ?? 0) * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0);
      }
    }
  }

  return stack?.[0] ?? new NestedInteger(isNegative ? -num! : num);
}
