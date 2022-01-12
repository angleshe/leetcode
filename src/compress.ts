/**
 * @description 返回压缩后数组的新长度
 * @author angle
 * @date 2022-01-12
 * @export
 * @param {string[]} chars
 * @returns {number}
 */
const zeroCode = '0'.charCodeAt(0);
export function compress(chars: string[]): number {
  let start: number = 0;
  let end: number = 0;
  let i: number = 0;

  while (i < chars.length) {
    let j = i + 1;
    while (j < chars.length && chars[j] === chars[i]) {
      j++;
    }
    let count = j - i;
    start = end;
    chars[end++] = chars[i];
    if (count > 1) {
      while (count) {
        chars[end++] = String.fromCharCode(zeroCode + (count % 10));
        count = Math.floor(count / 10);
      }
      let left = start + 1;
      let right = end - 1;
      while (right > left) {
        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
      }
    }
    i = j;
  }
  return end;
}
