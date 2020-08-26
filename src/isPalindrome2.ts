/**
 * @description 验证字符串是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * @author angle
 * @date 2020-08-26
 * @export
 * @param {string} s
 * @returns {boolean}
 */
export function isPalindrome(s: string): boolean {
  let left: number = 0;
  let right: number = s.length - 1;
  const str: string = s.toLocaleLowerCase();
  while (right > left) {
    if (!((str[left] >= '0' && str[left] <= '9') || (str[left] >= 'a' && str[left] <= 'z'))) {
      left++;
    } else if (
      !((str[right] >= '0' && str[right] <= '9') || (str[right] >= 'a' && str[right] <= 'z'))
    ) {
      right--;
    } else {
      if (str[left++] !== str[right--]) {
        return false;
      }
    }
  }
  return true;
}
