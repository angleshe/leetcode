/**
 * @description 在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回-1。
 * @author angle
 * @date 2020-01-06
 * @export
 * @param {string} haystack 原字符串
 * @param {string} needle 查找字符串
 * @returns {number} 位置
 */
export function strStr(haystack: string, needle: string): number {
  if (needle === '') {
    return 0;
  }
  for (let i: number = 0; i < haystack.length; i++) {
    if (needle.length > haystack.length - i) {
      break;
    }
    let j: number = 0;
    while (j < needle.length && haystack[i + j] === needle[j]) {
      j++;
    }
    if (j === needle.length) {
      return i;
    }
  }
  return -1;
}
