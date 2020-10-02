/**
 * @description 逆波兰表示法值
 * @author angle
 * @date 2020-10-02
 * @export
 * @param {string[]} tokens
 * @returns {number}
 */
export function evalRPN(tokens: string[]): number {
  const res: number[] = [];
  tokens.forEach((item) => {
    if (item === '+') {
      const a: number = res.pop() ?? 0;
      const b: number = res.pop() ?? 0;
      res.push(a + b);
    } else if (item === '-') {
      const a: number = res.pop() ?? 0;
      const b: number = res.pop() ?? 0;
      res.push(b - a);
    } else if (item === '*') {
      const a: number = res.pop() ?? 1;
      const b: number = res.pop() ?? 1;
      res.push(b * a);
    } else if (item === '/') {
      const a: number = res.pop() ?? 1;
      const b: number = res.pop() ?? 1;
      const val: number = b / a;
      res.push(val > 0 ? Math.floor(val) : -Math.floor(-val));
    } else {
      res.push(parseFloat(item));
    }
  });
  return res?.[0] ?? 0;
}
