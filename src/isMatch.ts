/**
 * @description 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 * @author angle
 * @date 2019-12-10
 * @export
 * @param {string} s 待检验字符串, 可能为空，且只包含从 a-z 的小写字母。
 * @param {string} p 匹配规则, 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 * @returns {boolean} 是否匹配
 */
export function isMatch(s: string, p: string): boolean {
  if (s === '' && p === '') {
    return true;
  } else if (p === '') {
    return false;
  } else if (p.length > 1 && p[1] === '*') {
    return (
      isMatch(s, p.substring(2, p.length)) ||
      // eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
      (s !== '' && (s[0] === p[0] || p[0] === '.') && isMatch(s.substring(1, s.length), p))
    );
  }
  return (
    s !== '' &&
    // eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
    (s[0] === p[0] || p[0] === '.') &&
    isMatch(s.substring(1, s.length), p.substring(1, p.length))
  );
}
