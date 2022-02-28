/**
 * @description 返回 n 的最小好进制
 * @author angle
 * @date 2022-02-28
 * @export
 * @param {string} n
 * @returns {string}
 */
export function smallestGoodBase(n: string): string {
  const nVal = parseInt(n);
  const mMax = Math.floor(Math.log(nVal) / Math.log(2));
  for (let m = mMax; m > 1; m--) {
    const k = BigInt(Math.floor(Math.pow(nVal, 1 / m)));
    if (k > 1) {
      let mu1 = BigInt(1);
      let sum = BigInt(1);
      for (let i = 1; i <= m; i++) {
        mu1 *= k;
        sum += mu1;
      }
      if (sum === BigInt(n)) {
        return k + '';
      }
    }
  }
  return (BigInt(n) - BigInt(1)).toString();
}
