/**
 * @description 返回在神奇字符串 s 的前 n 个数字中 1 的数目
 * @author angle
 * @date 2022-02-26
 * @export
 * @param {number} n
 * @returns {number}
 */
export function magicalString(n: number): number {
  let res: number = 1;
  if (n > 3) {
    let str: string = '122';
    let i: number = str.length - 1;
    while (str.length < n) {
      if (str.endsWith('1')) {
        if (str[i] === '1') {
          str += '2';
        } else {
          str += '22';
        }
      } else {
        if (str[i] === '1') {
          str += '1';
          res += 1;
        } else {
          str += '11';
          res += 2;
        }
      }
      i++;
    }
    if (str.endsWith('1')) {
      res = res - (str.length - n);
    }
  }
  return res;
}
