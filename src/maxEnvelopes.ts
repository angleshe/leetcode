/**
 * @description 计算最多能有多少个信封能组成一组“俄罗斯套娃”信封
 * @author angle
 * @date 2021-07-02
 * @export
 * @param {number[][]} envelopes
 * @returns {number}
 */
export function maxEnvelopes(envelopes: number[][]): number {
  if (envelopes.length) {
    const data = envelopes.sort((a, b) => {
      if (a[0] === b[0]) {
        return b[1] - a[1];
      }
      return a[0] - b[0];
    });
    const dp: number[] = Array(data.length).fill(1);
    let res: number = 1;
    for (let i: number = 1; i < data.length; i++) {
      for (let j: number = 0; j < i; j++) {
        if (data[i][1] > data[j][1]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
      res = Math.max(res, dp[i]);
    }
    return res;
  }
  return 0;
}
