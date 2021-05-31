/**
 * @description 将输入的字符串反转
 * @author angle
 * @date 2021-05-31
 * @export
 * @param {string[]} s
 */
export function reverseString(s: string[]): void {
  let left: number = 0;
  let right: number = s.length - 1;
  while (right > left) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}
