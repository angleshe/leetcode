function _addOperators(
  num: string,
  index: number,
  prev: number,
  count: number,
  path: string,
  res: string[],
  target: number
): void {
  if (index === num.length && count === target) {
    res.push(path);
  } else {
    for (let i: number = index; i < num.length; i++) {
      const nextIndex = i + 1;
      const n = parseInt(num.substring(index, nextIndex));
      if (index === 0) {
        _addOperators(num, nextIndex, n, n, n.toString(), res, target);
      } else {
        const product: number = prev * n;
        _addOperators(num, nextIndex, n, count + n, path + `+${n}`, res, target);
        _addOperators(num, nextIndex, -n, count - n, path + `-${n}`, res, target);
        _addOperators(num, nextIndex, product, count - prev + product, path + `*${n}`, res, target);
      }
      if (n === 0) {
        break;
      }
    }
  }
}
/**
 * @description 给定一个仅包含数字 0-9 的字符串和一个目标值，在数字之间添加二元运算符（不是一元）+、- 或 * ，返回所有能够得到目标值的表达式
 * @author angle
 * @date 2021-02-23
 * @export
 * @param {string} num
 * @param {number} target
 * @returns {string[]}
 */
export function addOperators(num: string, target: number): string[] {
  const res: string[] = [];
  _addOperators(num, 0, 0, 0, '', res, target);
  return res;
}
