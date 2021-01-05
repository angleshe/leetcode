const zeroCode = '0'.charCodeAt(0);
const nineCode = '9'.charCodeAt(0);

/**
 * @description 实现一个基本的计算器来计算非负整数，+， - ，*，/ 四种运算符和空格字符串表达式的值
 * @author angle
 * @date 2021-01-05
 * @export
 * @param {string} s
 * @returns {number}
 */
export function calculate(s: string): number {
  const stack: number[] = [];
  let num: number = 0;
  let sign: string = '+';

  for (let i: number = 0; i < s.length; i++) {
    const isNumber = s.charCodeAt(i) >= zeroCode && s.charCodeAt(i) <= nineCode;
    if (isNumber) {
      num = 10 * num + s.charCodeAt(i) - zeroCode;
    }
    if ((s[i] !== ' ' && !isNumber) || i === s.length - 1) {
      if (sign === '+') {
        stack.push(num);
      } else if (sign === '-') {
        stack.push(-num);
      } else if (sign === '*') {
        stack.push(stack.pop()! * num);
      } else if (sign === '/') {
        const target = stack.pop()!;
        stack.push(target >= 0 ? Math.floor(target / num) : -Math.floor(-target / num));
      }
      num = 0;
    }
    if (s[i] === '+' || s[i] === '-' || s[i] === '*' || s[i] === '/') {
      sign = s[i];
    }
  }

  return stack.reduce((prev, curr) => prev + curr, 0);
}
