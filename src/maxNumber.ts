export function pickKMaxNumber(nums: number[], k: number): number[] {
  const res: number[] = [];
  let n = nums.length - k;
  nums.forEach((num) => {
    if (res.length) {
      while (res.length && n && res[res.length - 1] < num) {
        res.pop();
        n--;
      }
    }
    res.push(num);
  });
  while (n) {
    res.pop();
    n--;
  }
  return res;
}

function compare(nums1: number[], i1: number, nums2: number[], i2: number): boolean {
  if (i1 < nums1.length && i2 < nums2.length && nums1[i1] === nums2[i2]) {
    return compare(nums1, i1 + 1, nums2, i2 + 1);
  }
  if (i2 >= nums2.length || (i1 < nums1.length && nums1[i1] > nums2[i2])) {
    return true;
  }
  return false;
}

export function mergeArray(nums1: number[], nums2: number[]): number[] {
  let i1: number = 0;
  let i2: number = 0;
  const res: number[] = [];
  while (i1 < nums1.length || i2 < nums2.length) {
    if (compare(nums1, i1, nums2, i2)) {
      res.push(nums1[i1++]);
    } else {
      res.push(nums2[i2++]);
    }
  }
  return res;
}

export function maxArray(nums1: number[], nums2: number[]): number[] {
  if (nums1.length === nums2.length) {
    for (let i: number = 0; i < nums1.length; i++) {
      if (nums1[i] > nums2[i]) {
        return nums1;
      }
      if (nums1[i] < nums2[i]) {
        return nums2;
      }
    }
    return nums1;
  }
  return nums1.length > nums2.length ? nums1 : nums2;
}
/**
 * @description 现在从这两个数组中选出 k (k <= m + n) 个数字拼接成一个最大数，要求从同一个数组中取出的数字保持其在原数组中的相对顺序。
 * @author angle
 * @date 2021-04-12
 * @export
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @returns {number[]}
 */
export function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
  let res: number[] = [];

  for (let i: number = 0; i <= k; i++) {
    if (i <= nums1.length) {
      if (k - i <= nums2.length) {
        const arr1 = pickKMaxNumber(nums1, i);
        const arr2 = pickKMaxNumber(nums2, k - i);
        res = maxArray(res, mergeArray(arr1, arr2));
      }
    } else {
      break;
    }
  }
  return res;
}
