function quickSelect(nums: number[], start: number, end: number, n: number): void {
  let i: number = start;
  let j: number = start;
  const target = nums[end - 1];
  while (j < end) {
    if (nums[j] <= target) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      i++;
    }
    j++;
  }
  if (i - 1 > n) {
    quickSelect(nums, start, i - 1, n);
  } else if (i <= n) {
    quickSelect(nums, i, end, n);
  }
}

function getIndex(i: number, len: number): number {
  // eslint-disable-next-line no-bitwise
  return (2 * i + 1) % (len | 1);
}
/**
 * @description 将数组重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。
 * @author angle
 * @date 2021-04-22
 * @export
 * @param {number[]} nums
 */
export function wiggleSort(nums: number[]): void {
  const mid = Math.floor(nums.length / 2);
  quickSelect(nums, 0, nums.length, mid);
  const median = nums[mid];

  let left: number = 0;
  let right: number = nums.length - 1;
  let i: number = 0;
  while (i <= right) {
    if (nums[getIndex(i, nums.length)] < median) {
      [nums[getIndex(right, nums.length)], nums[getIndex(i, nums.length)]] = [
        nums[getIndex(i, nums.length)],
        nums[getIndex(right, nums.length)]
      ];
      right--;
    } else if (nums[getIndex(i, nums.length)] > median) {
      [nums[getIndex(left, nums.length)], nums[getIndex(i, nums.length)]] = [
        nums[getIndex(i, nums.length)],
        nums[getIndex(left, nums.length)]
      ];
      left++;
      i++;
    } else {
      i++;
    }
  }
}
