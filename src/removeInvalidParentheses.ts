/**
 * @description 判断字符串的括号是否有效
 * @author angle
 * @date 2021-03-11
 * @export
 * @param {string} str
 * @returns {boolean}
 */
export function isValid(str: string): boolean {
  let cnt: number = 0;
  for (let i: number = 0; i < str.length; i++) {
    if (str[i] === '(') {
      cnt++;
    } else if (str[i] === ')') {
      cnt--;
      if (cnt < 0) {
        return false;
      }
    }
  }
  return cnt === 0;
}

/**
 * @description 删除最小数量的无效括号，使得输入的字符串有效，返回所有可能的结果
 * @author angle
 * @date 2021-03-11
 * @export
 * @param {string} s
 * @returns {string[]}
 */
export function removeInvalidParentheses(s: string): string[] {
  let level = new Set<string>([s]);

  while (level.size) {
    const res: string[] = [];
    level.forEach((item) => {
      if (isValid(item)) {
        res.push(item);
      }
    });
    if (res.length) {
      return res;
    }
    const nextLevel = new Set<string>();
    level.forEach((item) => {
      for (let i: number = 0; i < item.length; i++) {
        if (item[i] === '(' || item[i] === ')') {
          nextLevel.add(item.substring(0, i) + item.substring(i + 1));
        }
      }
    });
    level = nextLevel;
  }
  return [];
}
