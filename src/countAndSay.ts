/**
 * @description 外观数列
 * @author angle
 * @date 2020-01-20
 * @export
 * @param {number} n 行数
 * @returns {string} 该行的内容
 */
export function countAndSay(n: number): string {
  if (n === 1) {
    return '1';
  }
  const str: string = countAndSay(n - 1);
  let res: string = '';
  let times: number = 0;
  for (let i: number = 0; i < str.length; i++) {
    if (i === 0) {
      times = 1;
    } else if (str[i] !== str[i - 1]) {
      res += times + str[i - 1];
      times = 1;
    } else {
      times++;
    }
  }
  return res + times + str[str.length - 1];
}
