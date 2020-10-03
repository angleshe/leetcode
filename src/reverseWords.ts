/**
 * @description 逐个翻转字符串中的每个单词。
 * @author angle
 * @date 2020-10-03
 * @export
 * @param {string} s
 * @returns {string}
 */
export function reverseWords(s: string): string {
  let i: number = s.length;
  let hasWords: boolean = false;
  while (i) {
    while (i && s.startsWith(' ')) {
      s = s.substring(1);
      i--;
    }
    if (i) {
      let str: string = '';
      while (i && !s.startsWith(' ')) {
        str += s[0];
        s = s.substring(1);
        i--;
      }
      s = `${s.slice(0, i)} ${str}${s.slice(i)}`;

      hasWords = true;
    }
  }
  return hasWords ? s.substring(1) : s;
}
