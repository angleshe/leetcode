/**
 * @description 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * @author angle
 * @date 2019-12-26
 * @export
 * @param {number} n 生成括号的对数
 * @returns {string[]}
 */
export function generateParenthesis(n: number): string[] {
  if (n === 0) {
    return [''];
  } else if (n === 1) {
    return ['()'];
  }
  const res: string[] = [];
  for (let p: number = 0; p < n; p++) {
    generateParenthesis(p).forEach((item) => {
      generateParenthesis(n - 1 - p).forEach((other) => {
        res.push(`(${item})${other}`);
      });
    });
  }
  return res;
}
