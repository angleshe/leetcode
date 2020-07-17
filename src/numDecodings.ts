/**
 * @description 一条包含字母 A-Z 的消息通过以下方式进行了编码,给定一个只包含数字的非空字符串，请计算解码方法的总数。
 * @author angle
 * @date 2020-07-17
 * @export
 * @param {string} s
 * @returns {number}
 */
export function numDecodings(s: string): number {
  if (s.startsWith('0')) {
    return 0;
  }
  const dp: number[] = [1];
  for (let i: number = 1; i < s.length; i++) {
    if (s[i] === '0' && !(s[i - 1] === '1' || s[i - 1] === '2')) {
      return 0;
    }
    if (
      s[i] !== '0' &&
      !(i < s.length - 1 && s[i + 1] === '0') &&
      (s[i - 1] === '1' || (s[i - 1] === '2' && parseInt(s[i]) <= 6))
    ) {
      dp.push((i > 1 ? dp[i - 2] : 1) + dp[i - 1]);
    } else {
      dp.push(dp[i - 1]);
    }
  }
  return dp[s.length - 1];
}
