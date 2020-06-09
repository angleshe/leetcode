/**
 * @description 字符串是否是数字
 * @author angle
 * @date 2020-06-09
 * @export
 * @param {string} c
 * @returns {boolean}
 */
export function charIsNumber(c: string): boolean {
  const charCode: number = c.charCodeAt(0);
  return charCode >= '0'.charCodeAt(0) && charCode <= '9'.charCodeAt(0);
}
/**
 * @description 验证给定的字符串是否可以解释为十进制数字。
 * @author angle
 * @date 2020-06-09
 * @export
 * @param {string} s 测试数据
 * @returns {boolean}
 */
export function isNumber(s: string): boolean {
  let dot: boolean = true;
  let e: boolean = true;
  let num: boolean = false;
  s = s.trim();
  if (s.length === 0 || s === '.') {
    return false;
  }
  for (let i: number = 0; i < s.length; i++) {
    if (i < s.length - 1 && (i === 0 || s[i - 1] === 'e') && (s[i] === '+' || s[i] === '-')) {
      continue;
    } else if (charIsNumber(s[i])) {
      num = true;
      continue;
    } else if (s[i] === '.' && dot && (i === 0 || s[i - 1] !== 'e')) {
      dot = false;
      continue;
    } else if (
      s[i] === 'e' &&
      e &&
      i > 0 &&
      i < s.length - 1 &&
      num &&
      (s[i - 1] !== '+' || s[i - 1] !== '-')
    ) {
      dot = false;
      e = false;
      continue;
    }
    return false;
  }
  return num;
}
