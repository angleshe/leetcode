/**
 * @description 计算交集
 * @author angle
 * @date 2021-06-18
 * @export
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
export function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>();
  nums1.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num)! + 1);
    } else {
      map.set(num, 1);
    }
  });
  const res: number[] = [];
  nums2.forEach((num) => {
    if (map.has(num)) {
      const count = map.get(num)!;
      if (count) {
        res.push(num);
        map.set(num, count - 1);
      }
    }
  });
  return res;
}
