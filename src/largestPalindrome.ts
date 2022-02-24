/**
 * @description 返回两个 n 位整数乘积的 最大回文整数对 1337 取余
 * @author angle
 * @date 24/02/2022
 * @export
 * @param {number} n
 * @return {*}  {number}
 */
export function largestPalindrome(n: number): number {
  if (n === 1) {
    return 9;
  }
  const max = 10 ** n - 1;
  for (let i = max - 1; i > Math.floor(max / 10); i--) {
    const s1 = i.toString();
    const rev = BigInt(
      s1 +
        s1
          .split('')
          .reverse()
          .join('')
    );
    for (let x = max; x * x >= rev; x--) {
      if (rev % BigInt(x) === BigInt(0)) {
        return parseInt((rev % BigInt(1337)).toString());
      }
    }
  }
  return -1;
}
