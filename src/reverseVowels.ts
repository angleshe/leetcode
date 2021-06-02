function isVowel(s: string): boolean {
  return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(s);
}
/**
 * @description 反转该字符串中的元音字母
 * @author angle
 * @date 2021-06-02
 * @export
 * @param {string} s
 * @returns {string}
 */
export function reverseVowels(s: string): string {
  const arr = s.split('');
  let left: number = 0;
  let right: number = s.length;
  while (left < right) {
    if (isVowel(arr[left])) {
      // eslint-disable-next-line no-empty
      while (right > left && !isVowel(arr[--right])) {}
      if (left === right) {
        break;
      }
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
    left++;
  }
  return arr.join('');
}
