function countRangeSumRecursive(
  sums: number[],
  lower: number,
  upper: number,
  left: number,
  right: number
): number {
  if (left === right) {
    return 0;
  }
  const mid = left + Math.floor((right - left) / 2);
  const lCount = countRangeSumRecursive(sums, lower, upper, left, mid);
  const rCount = countRangeSumRecursive(sums, lower, upper, mid + 1, right);
  let res: number = lCount + rCount;
  let i: number = left;
  let l: number = mid + 1;
  let r: number = mid + 1;
  while (i <= mid) {
    while (l <= right && sums[l] - sums[i] < lower) {
      l++;
    }
    while (r <= right && sums[r] - sums[i] <= upper) {
      r++;
    }
    res += r - l;
    i++;
  }

  l = left;
  r = mid + 1;
  const arr: number[] = [];
  while (l <= mid || r <= right) {
    if (l > mid) {
      arr.push(sums[r++]);
    } else if (r > right) {
      arr.push(sums[l++]);
    } else if (sums[r] < sums[l]) {
      arr.push(sums[r++]);
    } else {
      arr.push(sums[l++]);
    }
  }
  for (i = 0; i < arr.length; i++) {
    sums[left + i] = arr[i];
  }

  return res;
}
/**
 * @description 值位于范围 [lower, upper]之内的nums区间和的个数
 * @author angle
 * @date 2021-04-27
 * @export
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @returns {number}
 */
export function countRangeSum(nums: number[], lower: number, upper: number): number {
  const sums: number[] = [0];
  let sum = 0;
  for (let i: number = 0; i < nums.length; i++) {
    sum += nums[i];
    sums.push(sum);
  }
  return countRangeSumRecursive(sums, lower, upper, 0, sums.length - 1);
}
