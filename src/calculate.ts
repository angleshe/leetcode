const zeroCode = '0'.charCodeAt(0);
const nineCode = '9'.charCodeAt(0);

/**
 * @description 实现一个左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格  基本的计算器
 * @author angle
 * @date 2020-12-30
 * @export
 * @param {string} s
 * @returns {number}
 */
export function calculate(s: string): number {
  const stack: (number | string)[] = [];
  let num: number = 0;
  let sign: string = '+';
  for (let i: number = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    const isNumber = code >= zeroCode && code <= nineCode;
    if (isNumber) {
      num = num * 10 + code - zeroCode;
    }
    if (!isNumber || i === s.length - 1) {
      const lastNode = stack[stack.length - 1];
      if (stack.length !== 0 && typeof lastNode === 'number') {
        if (sign === '+') {
          stack.push((stack.pop()! as number) + num);
        } else {
          stack.push((stack.pop()! as number) - num);
        }
      } else {
        if (sign === '+') {
          stack.push(num);
        } else {
          stack.push(-num);
        }
      }
      num = 0;
    }
    if (s[i] === '+') {
      sign = '+';
    } else if (s[i] === '-') {
      sign = '-';
    } else if (s[i] === '(') {
      stack.push(sign);
      sign = '+';
    } else if (s[i] === ')') {
      const target: number = stack.pop()! as number;
      sign = stack.pop()! as string;
      const lastNode = stack[stack.length - 1];
      if (stack.length !== 0 && typeof lastNode === 'number') {
        if (sign === '+') {
          stack.push((stack.pop()! as number) + target);
        } else {
          stack.push((stack.pop()! as number) - target);
        }
      } else {
        stack.push(target);
      }
    }
  }
  return stack.length ? (stack[0] as number) : 0;
}
