/**
 * @description 计算最后一个单词的长度
 * @author angle
 * @date 2020-05-31
 * @export
 * @param {string} s 字符串
 * @returns {number} 后一个单词的长度
 */
export function lengthOfLastWord(s: string): number {
  let res: number = 0;
  let i: number = s.length - 1;
  while (i >= 0) {
    if (s[i] !== ' ') {
      res++;
    } else if (res > 0) {
      break;
    }
    i--;
  }
  return res;
}
