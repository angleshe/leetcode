/**
 * @description 计算交集
 * @author angle
 * @date 2021-06-17
 * @export
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
export function intersection(nums1: number[], nums2: number[]): number[] {
  const parentSet = new Set(nums1);
  const resSet = new Set<number>();
  nums2.forEach((num) => {
    if (parentSet.has(num)) {
      resSet.add(num);
    }
  });
  return [...resSet];
}
