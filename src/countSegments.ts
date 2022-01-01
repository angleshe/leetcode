/**
 * @description 统计字符串中的单词个数
 * @author angle
 * @date 2022-01-01
 * @export
 * @param {string} s
 * @returns {number}
 */
export function countSegments(s: string): number {
  let count: number = 0;
  let isSegments: boolean = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if (isSegments) {
        count++;
      }
      isSegments = false;
    } else {
      isSegments = true;
    }
  }
  if (isSegments) {
    count++;
  }
  return count;
}
