/**
 * @description 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * @author angle
 * @date 2020-07-11
 * @export
 * @param {number[]} nums1
 * @param {number} m nums1有效元素数量
 * @param {number[]} nums2
 * @param {number} n nums2有效元素数量
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, nums1.length - m);
  while (n !== 0) {
    if (nums1[m - 1] <= nums2[n - 1]) {
      nums1.splice(m, 0, nums2[n - 1]);
      n--;
    } else if (m === 0) {
      nums1.splice(0, 0, ...nums2.slice(0, n));
      break;
    } else {
      m--;
    }
  }
}
