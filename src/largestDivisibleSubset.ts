/**
 * @description 返回重复正整数组中任意一个最大的整除子集
 * @author angle
 * @date 2021-08-18
 * @export
 * @param {number[]} nums
 * @returns {number[]}
 */
export function largestDivisibleSubset(nums: number[]): number[] {
  const data = nums.sort((a, b) => a - b);

  const dp: number[] = [];
  const nextPaths: number[] = [];
  let maxEndIndex: number = -1;

  for (let i: number = 0; i < data.length; i++) {
    let maxLen: number = 1;
    let maxLenIndex: number = i;
    for (let j: number = 0; j < i; j++) {
      if (data[i] % data[j] === 0) {
        if (dp[j] + 1 > maxLen) {
          maxLen = dp[j] + 1;
          maxLenIndex = j;
        }
      }
    }

    if (maxEndIndex < 0 || dp[maxEndIndex] < maxLen) {
      maxEndIndex = i;
    }
    dp.push(maxLen);
    nextPaths.push(maxLenIndex);
  }

  const res: number[] = [];
  if (maxEndIndex >= 0) {
    res.push(data[maxEndIndex]);
    for (let i: number = maxEndIndex; nextPaths[i] !== i; i = nextPaths[i]) {
      res.push(data[nextPaths[i]]);
    }
  }
  return res;
}
