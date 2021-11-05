/**
 * @description 旋转函数
 * @author angle
 * @date 2021-11-05
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function maxRotateFunction(nums: number[]): number {
  if (nums.length) {
    let { weightingSum: prevCount, sum } = nums.reduce<{
      weightingSum: number;
      sum: number;
    }>(
      (prev, curr, i) => {
        prev.sum += curr;
        prev.weightingSum += curr * i;
        return prev;
      },
      {
        sum: 0,
        weightingSum: 0
      }
    );
    let res: number = prevCount;
    for (let i: number = 1; i < nums.length; i++) {
      prevCount += sum - nums[nums.length - i] * nums.length;
      if (prevCount > res) {
        res = prevCount;
      }
    }
    return res;
  }
  return 0;
}
