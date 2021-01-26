/**
 * @description 含有数字和运算符的字符串，为表达式添加括号，改变其运算优先级以求出不同的结果, 求出所有可能的组合的结果。
 * @author angle
 * @date 2021-01-26
 * @export
 * @param {string} input
 * @returns {number[]}
 */
export function diffWaysToCompute(input: string): number[] {
  if (input.length === 0) {
    return [0];
  }
  if (/^\d*$/.test(input)) {
    return [parseInt(input)];
  }
  const res: number[] = [];

  for (let i: number = 0; i < input.length; i++) {
    if (input[i] === '+' || input[i] === '-' || input[i] === '*') {
      const leftArr = diffWaysToCompute(input.substring(0, i));
      const rightArr = diffWaysToCompute(input.substring(i + 1));

      leftArr.forEach((leftItem) => {
        rightArr.forEach((rightItem) => {
          if (input[i] === '+') {
            res.push(leftItem + rightItem);
          } else if (input[i] === '-') {
            res.push(leftItem - rightItem);
          } else if (input[i] === '*') {
            res.push(leftItem * rightItem);
          }
        });
      });
    }
  }

  return res;
}
