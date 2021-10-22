/* eslint-disable no-bitwise */
/**
 * @description t 由字符串 s 随机重排，然后在随机位置添加一个字母, 找出在 t 中被添加的字母
 * @author angle
 * @date 2021-10-22
 * @export
 * @param {string} s
 * @param {string} t
 * @returns {string}
 */
export function findTheDifference(s: string, t: string): string {
  let code: number = 0;
  for (let i: number = 0; i < s.length; i++) {
    code ^= s.charCodeAt(i);
  }
  for (let i: number = 0; i < t.length; i++) {
    code ^= t.charCodeAt(i);
  }
  return String.fromCharCode(code);
}
